import React, { useState, Fragment } from 'react'
import { Accordion, Label } from 'semantic-ui-react'
import { Stop } from '../Stop/Stop'

export const ListElement = ({ stop, activeIndex, manageActive }: any) => {
    const [colapsed, setColapsed] = useState(true)

    const handleClick = (id:number) => {
        setColapsed(!colapsed)
        manageActive(id)
        console.log(stop)
    }

    return <Fragment key={stop.stopId}>
        <Accordion.Title
            key={stop.stopId + 'title'}
            active={activeIndex === stop.stopId&&!colapsed}
            index={stop.stopId}
            onClick={()=>handleClick(stop.stopId)}>
            {stop.stopId >= 30000
                ? <>
                    <Label size='tiny' color='blue' content={'ZKM'} />
                    {stop.stopName}
                    {stop.stopCode && <Label circular size='tiny' content={stop.stopCode} />}
                    {stop.distance && <Label circular color='olive' size='tiny' content={`${stop.distance >= 1000 ? (Math.round(stop.distance / 100)) / 10 + 'km' : stop.distance + 'm'}`} />}
                </>
                : <>
                    <Label size='tiny' color='red' content={'ZTM'} />
                    {stop.stopName}
                    {stop.stopCode && <Label circular size='tiny' content={stop.stopCode} />}
                    {stop.distance && <Label circular color='yellow' size='tiny' content={`${stop.distance >= 1000 ? (Math.round(stop.distance / 100)) / 10 + 'km' : stop.distance + 'm'}`} />}
                </>
            }
        </Accordion.Title>
        <Accordion.Content key={stop.stopId + 'content'} active={activeIndex === stop.stopId &&!colapsed} >
            {!colapsed &&
                <Stop stopId={stop.stopId} />}
        </Accordion.Content>
    </Fragment>

}