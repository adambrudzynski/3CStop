import React from 'react';
import {Table} from 'semantic-ui-react';

export const GdyniaStop = ({stop, stopid, operator}) => {
  if (stop && stop.length > 1) {
    return (
      <div className={`stop__departure-table  ${operator && operator === 'ztm' ? 'ztm' : 'zkm'}`}>
        <table >
          <thead>
            <tr>
              <th>Linia</th>
              <th>Kierunek</th>
              <th>Odjazd</th>
            </tr>
          </thead>
          <tbody>
            {stop.map((element) => {
              return (
                <tr className={`stop__departure-table__row${element.delayDesc === '>>>' ? '--arriving' : ''} `} key={element.delay + stopid + element.delayDesc}>
                  <td >{element.shortName}</td>
                  <td>{element.headSign}</td>
                  <td>{element.delayDesc}</td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* <Table singleLine celled unstackable compact>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Linia</Table.HeaderCell>
                    <Table.HeaderCell>Kierunek</Table.HeaderCell>
                    <Table.HeaderCell>Odjazd</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>{stop.map((element, index) => {
                return <Table.Row error={element.delayDesc === '>>>'} key={stopid + index}><Table.Cell>{element.shortName}</Table.Cell><Table.Cell>{element.headSign}</Table.Cell><Table.Cell>{element.delayDesc}</Table.Cell></Table.Row>
            })}</Table.Body>
        </Table> */}
        <span className="info">Dane odświeżane są co 20 sekund</span>
      </div>
    );
  } else return <div>Brak odjazdów z wybranego przystanku</div>;
};
