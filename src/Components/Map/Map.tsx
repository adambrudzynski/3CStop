import React, { useState } from "react";
import { Map, Marker, Popup, TileLayer, AttributionControl } from "react-leaflet";
import { Icon } from "leaflet";
import { locationSorter } from "../List/sorter";
import { Stop } from "../Stop/Stop";

const StopMap: Function = ({ stops, center, manageActive, activeIndex, resetActiveIndex }: any): JSX.Element[] | JSX.Element => {

    const [currCenter, setCurrCenter] = useState(center)

    const handleMoveend = (e: any) => {
        const current = e.target.getCenter()
        setTimeout(() => {
            setCurrCenter([current.lat, current.lng])
        }, 350);

    }

    const distFrom = require('distance-from')

    const markers = stops ?
        stops.
            map((stop: any) => {
                stop.distance = Math.round(distFrom(currCenter).to([stop.stopLat, stop.stopLon]).in('m'))
                return stop
            })
            .sort(locationSorter)
            .slice(0, 80)
        : null

    const iconActive = new Icon({
        iconUrl: '/3CStop/assets/map-active.svg',
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
            animate
            center={center}
            zoom={15}
            attributionControl={false}
            onMoveend={(e: any) => handleMoveend(e)}>
            {markers && markers.map((stop: any) => (
                <Marker
                    key={stop.stopId}
                    position={
                        [stop.stopLat, stop.stopLon]
                    }
                    onClick={() => {
                        manageActive(stop)
                    }}

                    icon={activeIndex && stop.stopId === activeIndex
                        ? iconActive
                        : stop.operator === 'zkm' ? iconGdy : iconGdn}
                />
            ))}
            {activeIndex && (
                <Popup
                    position={center}
                    onClose={() => {
                        resetActiveIndex();
                    }}
                >
                    <Stop stopId={activeIndex} />
                </Popup>
            )}
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <AttributionControl position="topright" />
        </Map>
    );
}


export default StopMap