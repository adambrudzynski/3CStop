import React, { useState, useEffect, createRef } from 'react'
import { Accordion, Container, Sticky } from 'semantic-ui-react'

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
    const [operators, setOperators] = useState<Array<string>>([])

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

    const handleOperator = (operator: Array<string>) => {
        setOperators(operator)
    }

    const list = stops
        .filter((stop: any) => {
            if (operators.length === 0 || operators.length === 2 )return stop
            if (operators.length === 1 && operators.includes('ztm') && stop.stopId < 30000 ) return stop
            if (operators.length === 1 && operators.includes('zkm') && stop.stopId >= 30000) return stop
        })
        .filter((stop: any) => {
            const stopDesc = stop.stopDesc.toLowerCase()
            return stopDesc.includes(search)
        })
        .map((stop: any) => <ListElement key={stop.stopId + 'accordition'} stop={stop} />)

    if (loading) { return <h1>loading</h1> }
    if (error) { return <h1>Error!</h1> }
    return <Container >
        <div ref={contextRef}>
            <Filter search={handleSearch} handleOperator={handleOperator} operator={operators} name={search} stickyContext={contextRef} />
            <Accordion styled >
                {list}
            </Accordion>
        </div>
    </Container>
}

export { StopList }