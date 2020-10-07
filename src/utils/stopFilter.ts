import { locationSorter } from '../Components/List/sorter'
import {Filter, Stop} from './../Components/Content'
const distFrom = require('distance-from')


export const stopFilter = (stopsArray: Array<Stop>, favs: Array<number>, filters:Filter, location: [number, number] | null) => {
    return stopsArray.map((stop: Stop) => {
        stop.distance = location && Math.round(distFrom(location).to([stop.stopLat, stop.stopLon]).in('m'))
        stop.operator = stop.stopId < 30000 ? 'ztm' : 'zkm'
        stop.fav = favs.indexOf(stop.stopId) >= 0 ? true : false
        return stop
    })
    .sort(locationSorter)
    .filter((stop: Stop) => filters.favs===true ? stop.fav === filters.favs : stop)
    .filter((stop: Stop) => {
        if (filters.operators === 'all') {
            return stop
        }
        return filters.operators === stop.operator
    })
    .filter((stop: Stop) => {
        const stopName = stop.stopName ? stop.stopName.toLowerCase() : stop.stopDesc.toLowerCase()
        return stopName.includes(filters.search)
    })
}