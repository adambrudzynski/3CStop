import React, { useState, Fragment, forwardRef, useEffect } from 'react'
import { Accordion, Label } from 'semantic-ui-react'
import { Stop } from '../Stop/Stop'

const ListElement = ({ stop, activeIndex, manageActive }: any, ref: any) => {
    const [colapsed, setColapsed] = useState(true)

    useEffect(() => {
        if (activeIndex === stop.stopId) {
            ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    }, [activeIndex])


    const handleClick = () => {
        manageActive(stop)
        console.log(stop)
    }

    return <div ref={ref} key={stop.stopId} >
        <Accordion.Title
            active={activeIndex === stop.stopId}
            index={stop.stopId}
            onClick={handleClick}>
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
        <Accordion.Content
            active={activeIndex === stop.stopId} >
            {activeIndex === stop.stopId &&
                <Stop stopId={stop.stopId} />}
        </Accordion.Content>
    </div>


}
export default forwardRef(ListElement)