import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'


interface MessageType {
    type: "grey" | "red" | "orange" | "yellow" | "olive" | "green" | "teal" | "blue" | "violet" | "purple" | "pink" | "brown" | "black" | undefined;
    message: string | null
}

type AppProps = { location: (location: Array<[Number, Number]>) => void }

const initialMessage: MessageType = {
    type: 'grey',
    message: ''
}

export const LocationBtn = ({ location }: AppProps) => {
    const [message, setMessage] = useState<MessageType>(initialMessage)

    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    const success = (pos: Object | any) => {
        const crd = pos.coords;
        setMessage({
            type: 'green',
            message: `${crd.latitude}, ${crd.longitude}`
        })
        location([crd.latitude, crd.longitude])
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
    }

    const error = (err: Object | any) => {
        setMessage({
            type: 'red',
            message: `ERROR(${err.code}): ${err.message}`
        })
        console.warn(`ERROR(${err.code}): ${err.message}`);
        if (message.type === 'red') {
            setTimeout(() => {
                setMessage({
                    type: 'grey',
                    message: null
                })
            }, 3500);
        }
    }
    const getLocation = () => {
        navigator.geolocation.getCurrentPosition(success, error, options);
    }

    return <Button
        basic
        icon='location arrow'
        color={message.type || undefined}
        onClick={getLocation} >
    </Button>
}