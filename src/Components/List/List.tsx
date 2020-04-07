import React from 'react'
import { List, Dimmer, Loader } from 'semantic-ui-react'
// import useSWR from 'swr'

import ListElement from './ListElement'
// import { stopInTrips } from './fetchList'

const swrOptions = {
    revalidateOnFocus: false
}

const StopList = ({ stops, manageActive, activeIndex, lines }: any) => {


    const refs = stops && stops.reduce((acc: any, value: any) => {
        acc[value.stopId] = React.createRef();
        return acc;
    }, {});

    const list = stops ?
        stops.map((stop: any) =>
            <List.Item key={stop.stopId} className={activeIndex === stop.stopId ? 'main-list__item--active' : 'main-list__item'}>
                <ListElement
                    lines={lines ? lines[stop.stopId] : null}
                    ref={refs[stop.stopId]}
                    stop={stop}
                    activeIndex={activeIndex}
                    manageActive={manageActive} />
            </List.Item>)
        : null

    if (!stops) {
        return <Dimmer active inverted>
            <Loader inverted content='Pobieranie listy przystanków' />
        </Dimmer>

    }
    return <List className={activeIndex ? 'main-list--short' : 'main-list'} divided verticalAlign='middle'>
        {list}
    </List>

}

export { StopList }