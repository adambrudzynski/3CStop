import React, { useState } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import { locationSorter } from "../List/sorter";

const StopMap: Function = ({ stops, center, manageActive, activeIndex }: any): JSX.Element[] | JSX.Element => {

    const [currCenter, setCurrCenter] = useState(center)

    const handleMoveend = (e: any) => {
        const current = e.target.getCenter()
        setTimeout(() => {
            setCurrCenter([current.lat, current.lng])
        }, 1000);
    }
    const distFrom = require('distance-from')

    const markers = stops ?
        stops.
            map((stop: any) => {
                // return distFrom(currCenter).to([stop.stopLat, stop.stopLon]).in('m') < 3000
                stop.distance = Math.round(distFrom(currCenter).to([stop.stopLat, stop.stopLon]).in('m'))
                return stop
            })
            .sort(locationSorter)
            .slice(0, 60)
        : null

    const iconActive = new Icon({
        iconUrl: '/3CStop/assets/maps-active.svg',
        iconSize: [25, 30],
    })
    const iconGdn = new Icon({
        iconUrl: '/3CStop/assets/map-gdn.svg',
        iconSize: [25, 30],
    })
    const iconGdy = new Icon({
        iconUrl: '/3CStop/assets/map-gdy.svg',
        iconSize: [25, 30],
    })
    const iconFav = new Icon({
        iconUrl: '/3CStop/assets/map-fav.svg',
        iconSize: [25, 25],
    })

    return (
        <Map
            center={center}
            zoom={14}
            onMoveend={(e: any) => handleMoveend(e)}>>
            {markers && markers.map((stop: any) => (
                <Marker
                    key={stop.stopId}
                    position={
                        [stop.stopLat, stop.stopLon]
                    }
                    onClick={() => {
                        manageActive(stop.stopId)
                    }}

                    icon={stop.stopId > 30000 ? iconGdy : iconGdn}
                />
            ))}
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
        </Map>
    );
}


export default StopMap