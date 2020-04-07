import React, { useState, useEffect } from 'react'
import { fetchGdanskStop } from './gdanskFetcher';
import { fetchGdyniaStop } from './gdyniaFetcher';
import { GdyniaStop } from './GdyniaStop';
import { Placeholder, Button } from 'semantic-ui-react';
import { lines } from '../List/fetchList';


interface HtmlTable {
    __html: string
}

export const Stop: Function = ({ stopId, reset }: any): JSX.Element[] | JSX.Element => {
    const [table, setTable] = useState<HtmlTable | undefined>();
    const [gdyniaStop, setGdyniaStop] = useState(null)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() => {
        // lines()
        if (stopId < 30000) {
            getGdansk(stopId)
        }
        else { getGdynia(stopId) }

    }, [stopId])

    const getGdansk = async (id: number) => {
        setLoading(true)
        const stop = await fetchGdanskStop(id)
        setTable({
            __html: stop
        })
        setLoading(false)
    }

    const getGdynia = async (id: number) => {
        setLoading(true)
        const stop = await fetchGdyniaStop(id)
        setGdyniaStop(stop)
        setLoading(false)
    }

    return loading ?
        <Placeholder>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
        </Placeholder>

        : <div className='stop'> <Button floated='right' icon='cancel' circular onClick={reset} />
            {stopId < 30000
                ? <div dangerouslySetInnerHTML={table}></div>
                : <GdyniaStop stopid={stopId} stop={gdyniaStop} />}
        </div>
}