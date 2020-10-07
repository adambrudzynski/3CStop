import React, { createRef, useState, useEffect } from 'react'
import useSWR from 'swr'
import { Grid, Ref, Sticky, Responsive } from 'semantic-ui-react'
import useLocalStorageState from 'use-local-storage-state'

import { StopList } from './List/List'
import StopMap from './Map/Map'
import { Filter } from './List/Filter/Filter'
import { fetchAll } from './List/fetchList'
import { Stop } from './Stop/Stop'
import { getWindowDimensions } from '../utils/hooks'
import { stopFilter } from '../utils/stopFilter'

const swrOptions = {
    revalidateOnFocus: false
}
export type Filter = {
    operators: string;
    search: string;
    favs: boolean
}
export type Stop = {
    stopId: number;
    activationDate?: string;
    date?: string;
    depot?: number;
    lines?: Array<number>;
    nonpassenger?: number;
    onDemand?: number
    stopCode?: string | number | null
    stopDesc: string
    stopLat: number
    stopLon: number
    stopName?: string|null
    stopShortName?: string | null
    stopTimezone?: string
    stopUrl?: string
    subName?: number | string
    ticketZoneBorder?: number
    virtual?: number
    zoneId?: number
    zoneName?: string;
    distance?: number | string | null
    operator?: string
    fav? : boolean 
}

const Content: Function = (): JSX.Element[] | JSX.Element => {
    const contextRef = createRef()
    const { data: stops } = useSWR(" ", fetchAll, swrOptions)
    const [filters, setFilters] = useState<Filter>({ operators: 'all', search: "", favs: false })
    const [location, setLocation] = useState<[number, number] | null>(null)
    const [center, setCenter] = useState<[number | string | undefined, number | string | undefined]>([process.env.REACT_APP_DEFAULT_LOC_CENTER_LAT, process.env.REACT_APP_DEFAULT_LOC_CENTER_LON])
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const [favs, setFavs] = useLocalStorageState<Array<number>>('fav', [])

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleFilters = (type: string, vlaue: string | boolean) => {
        setFilters({
            ...filters,
            [type]: vlaue
        })
    }

    const handleLocation = (userLocation: [number, number]) => {
        setLocation(userLocation);
        setCenter(userLocation)
    }

    const manageActive = (stop: Stop) => {
        setActiveIndex(stop.stopId)
        setCenter([stop.stopLat, stop.stopLon])
    }

    const resetActiveIndex = () => {
        setActiveIndex(null)
    }

    const favourite = (fav: number) => {
        if (favs.includes(fav)) {
            let list = [...favs]
            list.splice(list.indexOf(fav), 1)
            setFavs([...list])
        } else {
            setFavs([...favs, fav])
        }
    }

    const list = stops && stopFilter(stops, favs, filters, location)

    return <>
        <Responsive maxWidth={550}>
            {activeIndex
                ? <Stop stopId={activeIndex} reset={resetActiveIndex} />
                : <StopList
                    favourite={favourite}
                    height={windowDimensions.height - 40}
                    stops={list}
                    activeIndex={activeIndex}
                    manageActive={manageActive} />}
        </Responsive>
        <Responsive minWidth={551} >
            <Ref innerRef={contextRef}>
                <Grid columns={2} >
                    <Grid.Column>
                        <StopList
                            favourite={favourite}
                            height={windowDimensions.height - 40}
                            stops={list}
                            activeIndex={activeIndex}
                            manageActive={manageActive} />

                    </Grid.Column>
                    <Grid.Column>
                        <Sticky context={contextRef}>
                            <StopMap
                                stops={list}
                                center={center}
                                activeIndex={activeIndex}
                                manageActive={manageActive}
                                resetActiveIndex={resetActiveIndex} />
                        </Sticky>
                    </Grid.Column>

                </Grid>
            </Ref>
        </Responsive>
        <Filter
            filters={filters}
            handleFilters={handleFilters}
            location={handleLocation} />
    </>
}
export default Content