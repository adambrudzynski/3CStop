import React, { createRef, useState, useEffect } from 'react'
import useSWR from 'swr'
import { Grid, Ref, Sticky, Responsive } from 'semantic-ui-react'

import { StopList } from './List/List'
import StopMap from './Map/Map'
import { Filter } from './List/Filter/Filter'
import { locationSorter } from './List/sorter'
import { fetchLists, stopInTrips } from './List/fetchList'
import { Stop } from './Stop/Stop'
import { getWindowDimensions } from '../utils/hooks'

const swrOptions = {
    revalidateOnFocus: false
}

const Content: Function = (): JSX.Element[] | JSX.Element => {
    const contextRef = createRef()
    const { data: stops } = useSWR(" ", fetchLists, swrOptions)
    const { data: stopTrips } = useSWR("stopInTrips", stopInTrips, swrOptions)
    const [search, setSearch] = useState<string>('')
    const [operators, setOperators] = useState<string>('all')
    const [location, setLocation] = useState<[number, number] | null>(null)
    const [center, setCenter] = useState<[number | string | undefined, number | string | undefined]>([process.env.REACT_APP_DEFAULT_LOC_CENTER_LAT, process.env.REACT_APP_DEFAULT_LOC_CENTER_LON])
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleSearch = (search: string) => {
        setSearch(search)
    }

    const handleOperator = (operator: string) => {
        setOperators(operator)
    }

    const handleLocation = (userLocation: [number, number]) => {
        setLocation(userLocation);
        setCenter(userLocation)
    }

    const manageActive = (stop: any) => {
        setActiveIndex(stop.stopId)
        setCenter([stop.stopLat, stop.stopLon])
    }

    const resetActiveIndex = () => {
        setActiveIndex(null)
    }

    const distFrom = require('distance-from')

    const list = stops && stops
        .map((stop: any) => {
            stop.distance = location && Math.round(distFrom(location).to([stop.stopLat, stop.stopLon]).in('m'))
            stop.operator = stop.stopId < 30000 ? 'ztm' : 'zkm'
            return stop
        })
        .sort(locationSorter)
        .filter((stop: any) => {
            if (operators === 'all') {
                return stop
            }
            return operators === stop.operator
        })
        .filter((stop: any) => {
            const stopName = stop.stopName ? stop.stopName.toLowerCase() : stop.stopDesc.toLowerCase()
            return stopName.includes(search)
        })

    return <>
            <Responsive maxWidth={550}>
                <StopList
                    height={windowDimensions.height - 40}
                    stops={list}
                    lines={stopTrips}
                    activeIndex={activeIndex}
                    manageActive={manageActive} />
                <Stop stopId={activeIndex} reset={resetActiveIndex} />
            </Responsive>
            <Responsive minWidth={551} >
                <Ref innerRef={contextRef}>
                    <Grid columns={2} >
                        <Grid.Column>
                            <StopList
                                height={windowDimensions.height - 40}
                                stops={list}
                                lines={stopTrips}
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
            search={handleSearch}
            handleOperator={handleOperator}
            operator={operators}
            name={search}
            location={handleLocation} />
    </>
}
export default Content