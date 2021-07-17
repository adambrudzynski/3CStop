import React from 'react';
import {Table} from 'semantic-ui-react';

export const GdyniaStop = ({stop, stopid, operator}) => {
  if (stop && stop.length > 1) {
    return (
      <div
        className={`stop__departure-table  ${
          operator && operator === 'ztm' ? 'ztm' : 'zkm'
        }`}
      >
        <table>
          <thead>
            <tr>
              <th>Linia</th>
              <th>Kierunek</th>
              <th>Odjazd</th>
            </tr>
          </thead>
          <tbody>
            {stop.map((element, index) => {
              return (
                <tr
                  className={`stop__departure-table__row${
                    element.delayDesc === '>>>' ? '--arriving' : ''
                  } `}
                  key={stopid + index}
                >
                  <td>{element.shortName}</td>
                  <td>{element.headSign}</td>
                  <td>{element.delayDesc}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <span className="info">Dane odświeżane są co 20 sekund</span>
      </div>
    );
  } else return <div>Brak odjazdów z wybranego przystanku</div>;
};
