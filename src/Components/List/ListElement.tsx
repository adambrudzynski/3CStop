import React from 'react'
import { Label, Icon, Button } from 'semantic-ui-react'
import { ListChildComponentProps } from 'react-window'
import { lineNames } from './fetchList';


const ListElement = ({ index, style, data, favourite }: ListChildComponentProps) => {
    return <div key={data.stops[index].stopId}
        className={data.stops[index].stopId === data.activeIndex ? 'main-list__item--active' : 'main-list__item'}
        style={{
            overflow: 'hidden',
            borderBottom: '1px solid lightgrey',
            ...style
        }}
        onClick={() => data.manageActive(data.stops[index])}
    >
        <Label size='tiny' color={data.stops[index].operator === 'ztm' ? 'red' : 'blue'} content={data.stops[index].operator.toUpperCase()} />
        {data.stops[index].stopName + ' ' || data.stops[index].stopDesc + ' '}
        {data.stops[index].stopCode && data.stops[index].stopCode}
        {/* {data.stops[index].distance && <Label circular color='olive' size='tiny' content={`${data.stops[index].distance >= 1000 ? (Math.round(data.stops[index].distance / 100)) / 10 + 'km' : data.stops[index].distance + 'm'}`} />} */}
        {data.lines && data.lines[data.stops[index].stopId]
            ? <> {data.lines[data.stops[index].stopId].map((line: any) => <Label key={line} circular size='tiny' content={lineNames(line)} />)} </>
            : null}
        <Button floated="right" icon='heart' circular onClick={() => favourite(data.stops[index].stopId)} />
    </div>

}
export default ListElement