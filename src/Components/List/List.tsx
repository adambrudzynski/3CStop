import React, { useState, useEffect, createRef } from 'react'
import { Accordion, Container, Dimmer, Loader } from 'semantic-ui-react'

import { getDate } from '../../utils/getDate'
import axios from 'axios'
import { ListElement } from './ListElement'
import { Filter } from './Filter/Filter'


const today = getDate()

const StopList: Function = (): JSX.Element[] | JSX.Element => {
    const [stops, setStops] = useState([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean | null>(null)
    const [search, setSearch] = useState<string>('')
    const [operators, setOperators] = useState<string>('all')

    useEffect(() => {
        fetchList()
    }, [])

    const contextRef = createRef<HTMLDivElement>()

    const fetchList = async () => {
        try {
            setLoading(true)
            const url = "https://ckan.multimediagdansk.pl/dataset/c24aa637-3619-4dc2-a171-a23eec8f2172/resource/4c4025f0-01bf-41f7-a39f-d156d201b82b/download/stops.json";
            const { data } = await axios.get(url);
            setStops(data[today].stops)
            setLoading(false)
        }
        catch (err) {
            setError(err)
            setLoading(false)
        }
    }

    const handleSearch = (search: string) => {
        setSearch(search)
    }

    const handleOperator = (operator: string) => {
        setOperators(operator)
    }

    const list = stops
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

    if (loading) {
        return <>
            <Dimmer active inverted>
                <Loader inverted size='big' content='Pobieranie listy przystanków' />
            </Dimmer>
        </>
    }
    if (error) { return <h1>Error!</h1> }
    return <div ref={contextRef}>
        <Filter search={handleSearch} handleOperator={handleOperator} operator={operators} name={search} stickyContext={contextRef} />
        <Accordion fluid styled >
            {list}
        </Accordion>
    </div>

}

export { StopList }