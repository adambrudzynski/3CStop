import React, { useState, useEffect } from 'react'
import { List, Accordion } from 'semantic-ui-react'

import { getDate } from '../../utils/getDate'
import axios from 'axios'
import { ListElement } from './ListElement'


const today = getDate()

const StopList: Function = (): JSX.Element[] | JSX.Element => {
    const [stops, setStops] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchList()
    }, [])

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

    if (loading) { return <h1>loading</h1> }
    if (error) { return <h1>Error!</h1> }
    return <Accordion styled>{stops.map((stop:any) => <ListElement key={stop.stopId + 'accordition'} stop={stop} />)}</Accordion>
}

export { StopList }