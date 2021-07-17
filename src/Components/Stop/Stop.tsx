import React from 'react';
import {Placeholder, Button, Label} from 'semantic-ui-react';
import useSWR from 'swr';

import {fetchGdanskStop} from './gdanskFetcher';
import {fetchGdyniaStop} from './gdyniaFetcher';
import {GdyniaStop} from './GdyniaStop';

interface Delay {
  shortName?: string;
  headSign?: string;
  delayDesc?: string;
  message?: string;
}

interface Props {
  stop: any;
  reset: void | undefined;
  mobile?: boolean;
}
const swrOptions = {
  refreshInterval: 20000,
};

const getStop = async (stopId: number) => {
  if (stopId < 30000) {
    return await fetchGdanskStop(stopId);
  } else if (stopId >= 30000) {
    return await fetchGdyniaStop(stopId);
  } else if (stopId === undefined || stopId === null) {
    return null;
  }
};

export const Stop: Function = ({
  stop,
  reset,
  mobile,
}: Props): JSX.Element[] | JSX.Element | null => {
  const {data: oneStop, error} = useSWR(
    `${stop && stop.stopId}`,
    () => getStop(stop && stop.stopId),
    swrOptions
  );

  if (!stop) {
    return null;
  }
  return (
    <div
      className={`stop${mobile ? '__mobile' : ''} ${
        oneStop ? 'loaded' : 'loading'
      }`}
    >
      {stop && (
        <>
          <Label
            size="tiny"
            color={stop.operator === 'ztm' ? 'red' : 'blue'}
            content={stop.operator.toUpperCase()}
          />
          {stop.stopName + ' ' || stop.stopDesc + ' '}
          {stop.stopCode && stop.stopCode}
        </>
      )}
      {reset && (
        <Button basic floated="right" icon="cancel" circular onClick={reset} />
      )}
      {!stop.stopId && null}
      {error && <>Wystąpił błąd. Spróbuj ponownie</>}
      {!oneStop ? (
        <Placeholder>
          <Placeholder.Line />
        </Placeholder>
      ) : (
        <GdyniaStop
          stopid={stop.stopId}
          stop={oneStop}
          operator={stop.operator}
        />
      )}
    </div>
  );
};
