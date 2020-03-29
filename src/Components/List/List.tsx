import React from 'react'
import { Accordion, Dimmer, Loader } from 'semantic-ui-react'
import ListElement from './ListElement'

const StopList = ({ stops, manageActive, activeIndex }: any) => {

    const refs = stops&& stops.reduce((acc:any, value:any) => {
        acc[value.stopId] = React.createRef();
        return acc;
      }, {});

    const list = stops ?
        stops.map((stop: any) => <ListElement
            key={stop.stopId}
            ref={refs[stop.stopId]}
            stop={stop}
            activeIndex={activeIndex}
            manageActive={manageActive} />)
        : null

    if (!stops) {
        return <Dimmer active inverted>
            <Loader inverted content='Pobieranie listy przystanków' />
        </Dimmer>

    }
    return <>
        <Accordion fluid className="main-list">
            {list}
        </Accordion>
    </>
}

export { StopList }