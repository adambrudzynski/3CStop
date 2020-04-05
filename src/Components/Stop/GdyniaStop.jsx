import React from 'react'

export const GdyniaStop = ({ stop, stopid }) => {

    const table = stop && stop.map(element => {
        return <tr key={element.delay + stopid}><td>{element.shortName}</td><td>{element.headSign}</td><td>{element.delayDesc}</td></tr>
    })

    return stop && <div><table>
        <thead><tr><th>Linia</th><th style={{ minWidth: "200px" }}>Kierunek</th><th>Odjazd</th></tr></thead>
        <tbody>{table}</tbody>
    </table>
    </div>

}