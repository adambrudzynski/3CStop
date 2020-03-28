import React, { useState } from 'react'
import { Accordion, Dimmer, Loader } from 'semantic-ui-react'
import useSWR from 'swr'

import { ListElement } from './ListElement'
import { Filter } from './Filter/Filter'
import { locationSorter } from './sorter'
import { fetchLists } from './fetchList'

const swrOptions = {
    revalidateOnFocus: false
}

const StopList = ({ stops }: any) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    const manageActive = (id: number) => setActiveIndex(id)

    const list = stops ?
        stops.map((stop: any) => <ListElement key={stop.stopId + 'accordition'} stop={stop} activeIndex={activeIndex} manageActive={manageActive} />)
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