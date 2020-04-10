import React, { useState } from 'react'
import { Dimmer, Loader, Visibility } from 'semantic-ui-react'
import { FixedSizeList as List } from 'react-window';
import ListElement from './ListElement'


const StopList = (props: any) => {
    const { stops, manageActive, activeIndex, lines, height }: any = props
    const [visibility, setVisibility] = useState<any>(350)

    const handleUpdate = (e: any, { calculations }: any): void => setVisibility(calculations)

    if (!stops) {
        return <Dimmer active inverted>
            <Loader inverted content='Pobieranie listy przystanków' />
        </Dimmer>

    }
    return <Visibility onOnScreen={handleUpdate} onUpdate={handleUpdate}>
        <List
            height={height || 850}
            itemCount={stops.length}
            itemSize={50}
            width={visibility.width}
            itemData={{
                stops,
                manageActive,
                lines,
                activeIndex
            }}
        >
            {ListElement}
        </List>
    </Visibility>

}

export { StopList }