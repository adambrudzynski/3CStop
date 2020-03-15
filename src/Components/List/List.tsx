import React, { useState} from 'react'
import { Accordion, Dimmer, Loader } from 'semantic-ui-react'
import { getDate } from '../../utils/getDate'
import axios from 'axios'
import useSWR from 'swr'

import { ListElement } from './ListElement'
import { Filter } from './Filter/Filter'
import { sorter, locationSorter } from './sorter'

const fetchList = async () => {
    try {
        const url = "https://ckan.multimediagdansk.pl/dataset/c24aa637-3619-4dc2-a171-a23eec8f2172/resource/4c4025f0-01bf-41f7-a39f-d156d201b82b/download/stops.json";
        const { data } = await axios.get(url);
        return (data[today].stops)
    }
    catch (err) {
        return (err)
    }
}
const today = getDate()

const StopList: Function = (): JSX.Element[] | JSX.Element => {
    const { data, error } = useSWR("https://ckan.multimediagdansk.pl/dataset/c24aa637-3619-4dc2-a171-a23eec8f2172/resource/4c4025f0-01bf-41f7-a39f-d156d201b82b/download/stops.json", fetchList)
    const [search, setSearch] = useState<string>('')
    const [operators, setOperators] = useState<string>('all')
    const [location, setLocation] = useState<Array<[Number, Number]> | null>(null)

    const handleSearch = (search: string) => {
        setSearch(search)
    }

    const handleOperator = (operator: string) => {
        setOperators(operator)
    }

    const handleLocation = (userLocation: Array<[Number, Number]>) => {
        setLocation(userLocation);
    }
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
            const stopDesc = stop.stopDesc.toLowerCase()
            return stopDesc.includes(search)
        })
        .map((stop: any) => <ListElement key={stop.stopId + 'accordition'} stop={stop} />)

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