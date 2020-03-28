import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";

const StopMap: Function = ({ stops, center }: any): JSX.Element[] | JSX.Element => {
    return (
        <Map center={center} zoom={14}>
            {stops && stops.map((stop: any) => (
                <Marker
                    key={stop.stopId}
                    position={
                        [stop.stopLat, stop.stopLon]
                    }
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