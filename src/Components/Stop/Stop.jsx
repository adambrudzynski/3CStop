import React, { useState, useEffect } from 'react'
import { fetchGdanskStop } from './gdanskFetcher';
import { fetchGdyniaStop } from './gdyniaFetcher';
import { GdyniaStop } from './GdyniaStop';

export const Stop = ({ stopId }) => {
    const [table, setTable] = useState(null);
    const [gdyniaStop, setGdyniaStop] = useState(null)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() => {
        if (stopId < 30000) {
            getGdansk(stopId)
        }
        else {getGdynia(stopId)}

    }, [stopId])

    const getGdansk = async (id) => {
        setLoading(true)
        const stop = await fetchGdanskStop(id)
        setTable({
            __html: stop
        })
        setLoading(false)
    }

    const getGdynia = async (id) => {
        setLoading(true)
        const stop = await fetchGdyniaStop(id)
        setGdyniaStop(stop)
        setLoading(false)
    }

    return loading ?
        <p>loading</p>
        : (gdyniaStop 
            ? <GdyniaStop stopid={stopId} stop={gdyniaStop} />
            :<div dangerouslySetInnerHTML={table}></div>)
}