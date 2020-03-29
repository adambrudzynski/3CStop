import React, { createRef, useState } from 'react'
import useSWR from 'swr'
import { Responsive, Segment, Grid, Ref, Sticky } from 'semantic-ui-react'

import { StopList } from './List/List'
import StopMap from './Map/Map'
import { Filter } from './List/Filter/Filter'
import { locationSorter } from './List/sorter'
import { fetchLists } from './List/fetchList'

const swrOptions = {
    revalidateOnFocus: false
}

const Content: Function = (): JSX.Element[] | JSX.Element => {
    const contextRef = createRef()
    const { data, error } = useSWR(" ", fetchLists, swrOptions)
    const [search, setSearch] = useState<string>('')
    const [operators, setOperators] = useState<string>('all')
    const [location, setLocation] = useState<[number, number] | null>(null)
    const [center, setCenter] = useState<[number | string | undefined, number | string | undefined]>([process.env.REACT_APP_DEFAULT_LOC_CENTER_LAT, process.env.REACT_APP_DEFAULT_LOC_CENTER_LON])
    const [activeIndex, setActiveIndex] = useState<number | null>(null)


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

    const distFrom = require('distance-from')

    const list = data && data
        .map((stop: any) => {
            stop.distance = location && Math.round(distFrom(location).to([stop.stopLat, stop.stopLon]).in('m'))
            stop.operator = stop.stopId < 30000 ? 'ztm' : 'zkm'
            return stop
        })
        .sort(locationSorter)
        .filter((stop: any) => {
            if (operators === 'all') return stop
            if (operators === 'ztm' && stop.stopId < 30000) return stop
            if (operators === 'zkm' && stop.stopId >= 30000) return stop
        })
        .filter((stop: any) => {
            const stopName = stop.stopName ? stop.stopName.toLowerCase() : stop.stopDesc.toLowerCase()
            return stopName.includes(search)
        })


    return <>
        <Segment.Group>
            <Responsive maxWidth={600}>
                <StopList
                    stops={list}
                    activeIndex={activeIndex}
                    manageActive={manageActive} />
            </Responsive>
            <Responsive minWidth={601}>
                <Ref innerRef={contextRef}>
                    <Grid columns={2}>
                        <Grid.Column>
                            <StopList
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
                                    manageActive={manageActive} />
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
        </Segment.Group>
    </>
}
export default Content