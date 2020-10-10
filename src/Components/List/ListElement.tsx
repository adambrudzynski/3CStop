import React from 'react';
import {Label, Button} from 'semantic-ui-react';
import {ListChildComponentProps} from 'react-window';
import {lineNames} from './fetchList';

const ListElement = ({index, style, data}: ListChildComponentProps) => {
  const styles = {
    ...(style as React.CSSProperties),
  };

  return (
    <div
      key={data.stops[index].stopId}
      className={
        data.stops[index].stopId === data.activeIndex
          ? 'main-list__item--active'
          : 'main-list__item'
      }
      style={{
        overflow: 'hidden',
        borderBottom: '1px solid lightgrey',
        ...styles,
      }}

    >
      <Button
        basic
        floated="right"
        icon="heart"
        color={data.stops[index].fav ? 'red' : 'grey'}
        circular
        onClick={() => data.favourite(data.stops[index].stopId)}
      />
      <div style={{height: '100%'}} onClick={() => data.manageActive(data.stops[index])}>
      <Label
        size="tiny"
        color={data.stops[index].operator === 'ztm' ? 'red' : 'blue'}
        content={data.stops[index].operator.toUpperCase()}
      />
      {data.stops[index].stopName + ' ' || data.stops[index].stopDesc + ' '}
      {data.stops[index].stopCode && data.stops[index].stopCode}
      {data.stops[index].lines
        ? data.stops[index].lines.map((line: number) => (
            <Label key={line} circular size="tiny" content={lineNames(line)} />
          ))
        : null}
      </div>
    </div>
  );
};
export default ListElement;
