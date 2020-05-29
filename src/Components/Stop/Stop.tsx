import React, { useState, useEffect } from 'react'
import { Placeholder, Button } from 'semantic-ui-react';
import useSWR from 'swr'

import { fetchGdanskStop } from './gdanskFetcher';
import { fetchGdyniaStop } from './gdyniaFetcher';
import { GdyniaStop } from './GdyniaStop';

interface Delay {
    shortName?: string,
    headSign?: string,
    delayDesc?: string,
    message?: string
}

const swrOptions = {
    refreshInterval: 20000
}

const getStop = async (stopId: number) => {
    
    if (stopId < 30000) {
        return await fetchGdanskStop(stopId)
    }
    else {
        return await fetchGdyniaStop(stopId)
    }

}

export const Stop: Function = ({ stopId, reset }: any): JSX.Element[] | JSX.Element | null => {
    const { data: oneStop, error } = useSWR(`${stopId}`, () => getStop(stopId), swrOptions)
   
    if (!stopId) return null
    else if (error) return <>Błąd</>

    else if (!oneStop) {    
        return <Placeholder>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
        </Placeholder>
    }

    return <div className='stop'>
        {reset && <Button floated='right' icon='cancel' circular onClick={reset} />}
        <GdyniaStop stopid={stopId} stop={oneStop} />
    </div>
}