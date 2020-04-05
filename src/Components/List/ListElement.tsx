import React, { forwardRef, useEffect } from 'react'
import { List, Label } from 'semantic-ui-react'


const ListElement = ({ stop, activeIndex, manageActive }: any, ref: any) => {
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
        <List.Content onClick={handleClick}>
            <List.Header>
                <Label size='tiny' color={stop.operator === 'ztm' ? 'red' : 'blue'} content={stop.operator.toUpperCase()} />
                {stop.stopName}
                {stop.stopCode && <Label circular size='tiny' content={stop.stopCode} />}
                {stop.distance && <Label circular color='olive' size='tiny' content={`${stop.distance >= 1000 ? (Math.round(stop.distance / 100)) / 10 + 'km' : stop.distance + 'm'}`} />}
            </List.Header>
            <List.Description>
                Kierunek: test, test
            </List.Description>
        </List.Content>
    </div>


}
export default forwardRef(ListElement)