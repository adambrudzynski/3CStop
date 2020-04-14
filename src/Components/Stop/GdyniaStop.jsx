import React from 'react'

export const GdyniaStop = ({ stop, stopid }) => {

    if (stop && stop.length > 1) {

        return <table>
            <thead><tr><th>Linia</th><th>Kierunek</th><th>Odjazd</th></tr></thead>
            <tbody>{stop.map(element => {
                return <tr key={element.delay + stopid + element.delayDesc}><td>{element.shortName}</td><td>{element.headSign}</td><td>{element.delayDesc}</td></tr>
            })}</tbody>
        </table>

    }
    else return <div>Brak odjazdów z wybranego przystanku</div>

}