import React, { forwardRef, useEffect } from 'react'
import { List, Label } from 'semantic-ui-react'


const ListElement = ({ stop, activeIndex, manageActive, lines }: any, ref: any) => {
    useEffect(() => {
        if (activeIndex === stop.stopId) {
            ref.current.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    }, [activeIndex, stop.stopId, ref, lines])

    const handleClick = () => {
        manageActive(stop)
        console.log(stop)
    }

    const lineNames = (line: number) => {
        if (line === 10603) {
            return 'K'
        } else if (line === 10605) {
            return 'R'
        } else if (line === 10606) {
            return 'S'
        } else if (line === 10609) {
            return 'Z'
        } else if (line === 10602) {
            return 'J'
        } else if (line >= 10000 && line < 10500 && line > 10399) {
            return `N${line - 10000 - 400}`
        } else if (line < 500 && line > 399) {
            return `N${line - 400}`
        }
        else if (line >= 10000) {
            return line - 10000
        }
        else if (line < 900 && line > 799) {
            return `T${line - 800}`
        }
        return line
    }

    return <div ref={ref} key={stop.stopId} >
        <List.Content onClick={handleClick}>
            <List.Header>
                <Label size='tiny' color={stop.operator === 'ztm' ? 'red' : 'blue'} content={stop.operator.toUpperCase()} />
                {stop.stopName || stop.stopDesc}
                {stop.stopCode && <Label circular size='tiny' content={stop.stopCode} />}
                {stop.distance && <Label circular color='olive' size='tiny' content={`${stop.distance >= 1000 ? (Math.round(stop.distance / 100)) / 10 + 'km' : stop.distance + 'm'}`} />}
            </List.Header>
            <List.Description>
                Linie: {lines && lines.map((line: any) => <Label key={line} circular size='tiny' content={lineNames(line)} />)}
            </List.Description>
        </List.Content>
    </div>


}
export default forwardRef(ListElement)