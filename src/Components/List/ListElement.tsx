import React, { useState, Fragment } from 'react'
import { List, Accordion, Label } from 'semantic-ui-react'
import { Stop } from '../Stop/Stop'

interface Props {
    stop: {
        // stopId: number;
        // stopCode: string;
        // stopName: string;
        // stopShortName: string;
        // stopDesc: string;
        // subName: string;
        // date: string;
        // zoneId: number;
        // zoneName: string;
        // virtual: number;
        // nonpassenger: number;
        // depot: number;
        // ticketZoneBorder: number;
        // onDemand: number;
        // activationDate: string;
        // stopLat: number;
        // stopLon: number;
        // stopUrl: string;
        // locationType: null;
        // parentStation: null;
        // stopTimezone: string
        // wheelchairBoarding: null;
    }


}

export const ListElement = ({ stop }: any) => {
    const [colapsed, setColapsed] = useState(true)

    const handleClick = () => {
        setColapsed(!colapsed)
    }

    return <Fragment key={stop.stopId}>
        <Accordion.Title key={stop.stopId + 'title'} active={!colapsed} onClick={handleClick}>
            {stop.stopId >= 30000
                ? <>
                    <Label size='tiny' color='blue' content={'ZKM'} />
                    {`Gdynia ${stop.stopDesc}`}
                </>
                : <>
                    <Label size='tiny' color='red' content={'ZTM'} />
                    {`${stop.zoneName} ${stop.stopName}`}
                </>
            }
        </Accordion.Title>
        <Accordion.Content key={stop.stopId + 'content'} active={!colapsed} >
            {!colapsed &&
                <Stop stopId={stop.stopId} />}
        </Accordion.Content>
    </Fragment>

}