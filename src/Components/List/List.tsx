import React, { useState} from 'react'
import { Accordion, Dimmer, Loader } from 'semantic-ui-react'
import useSWR from 'swr'

import { ListElement } from './ListElement'
import { Filter } from './Filter/Filter'
import { sorter, locationSorter } from './sorter'
import { fetchLists } from './fetchList'

const StopList: Function = (): JSX.Element[] | JSX.Element => {
    const { data, error } = useSWR(" ", fetchLists)
    const [search, setSearch] = useState<string>('')
    const [operators, setOperators] = useState<string>('all')
    const [location, setLocation] = useState<Array<[Number, Number]> | null>(null)
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    const handleSearch = (search: string) => {
        setSearch(search)
    }

    const handleOperator = (operator: string) => {
        setOperators(operator)
    }

    const handleLocation = (userLocation: Array<[Number, Number]>) => {
        setLocation(userLocation);
    }

    const manageActive = (id: number) => setActiveIndex(id)

    const distFrom = require('distance-from')

    const list = data && data
        .map((stop: any) => {
            if (location) {
                stop.distance = Math.round(distFrom(location).to([stop.stopLat, stop.stopLon]).in('m'))
                return stop
            }
            return stop
        })
        .sort(locationSorter)
        .filter((stop: any) => {
            if (operators === 'all') return stop
            if (operators === 'ztm' && stop.stopId < 30000) return stop
            if (operators === 'zkm' && stop.stopId >= 30000) return stop
        })
        .filter((stop: any) => {
            const stopName = stop.stopName? stop.stopName.toLowerCase(): stop.stopDesc.toLowerCase()
            return stopName.includes(search)
        })
        .map((stop: any) => <ListElement key={stop.stopId + 'accordition'} stop={stop} activeIndex={activeIndex} manageActive={manageActive} />)

    if (!data) {
        return <>
            <Dimmer active inverted>
                <Loader inverted size='big' content='Pobieranie listy przystanków' />
            </Dimmer>
        </>
    }
    if (error) { return <h1>Error!</h1> }
    return <>
        <Filter search={handleSearch} handleOperator={handleOperator} operator={operators} name={search} location={handleLocation} />
        <Accordion fluid styled className="main-list">
            {list}
        </Accordion>
    </>
}

export { StopList }