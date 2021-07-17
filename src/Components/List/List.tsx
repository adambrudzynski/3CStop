import React, { useState } from 'react'
import { Dimmer, Loader, Visibility } from 'semantic-ui-react'
import { FixedSizeList as List } from 'react-window';
import ListElement from './ListElement'


const StopList = (props: any) => {
    const { stops, manageActive, activeIndex, lines, height, favourite  }: any = props
    const [visibility, setVisibility] = useState<any>(350)

    const handleUpdate = (e: any, { calculations }: any): void => setVisibility(calculations)

    if (!stops) {
        return  <div style={{backgroundColor: 'white', width: "100%", height: '100%'}}><Dimmer><Loader active content='Pobieranie listy przystanków' /></Dimmer></div>
    

    }
    return <Visibility onOnScreen={handleUpdate} onUpdate={handleUpdate}>
        <List
            height={height || 850}
            itemCount={stops.length}
            itemSize={70}
            width={visibility.width}
            itemData={{
                favourite,
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