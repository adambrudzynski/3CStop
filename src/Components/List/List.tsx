import React, { useState } from 'react'
import { Accordion, Dimmer, Loader } from 'semantic-ui-react'
import { ListElement } from './ListElement'

const StopList = ({ stops, manageActive, activeIndex }: any) => {
 
    const list = stops ?
        stops.map((stop: any) => <ListElement
            key={stop.stopId}
            stop={stop} 
            activeIndex={activeIndex}
            manageActive={manageActive} />)
        : null

    if (!stops) {
        return <>
            <Dimmer active inverted>
                <Loader inverted size='big' content='Pobieranie listy przystanków' />
            </Dimmer>
        </>
    }
    return <>
        <Accordion fluid className="main-list">
            {list}
        </Accordion>
    </>
}

export { StopList }