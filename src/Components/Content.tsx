import React, {createRef, useState, useEffect} from 'react';
import useSWR from 'swr';
import {Grid, Ref, Sticky, Responsive, Button} from 'semantic-ui-react';
import useLocalStorageState from 'use-local-storage-state';

import {StopList} from './List/List';
import StopMap from './Map/Map';
import {Filter} from './List/Filter/Filter';
import {fetchAll} from './List/fetchList';
import {Stop} from './Stop/Stop';
import {getWindowDimensions} from '../utils/hooks';
import {stopFilter} from '../utils/stopFilter';

const swrOptions = {
  revalidateOnFocus: false,
};
export type Filter = {
  operators: string;
  search: string;
  favs: boolean;
};
export type Stop = {
  stopId: number;
  activationDate?: string;
  date?: string;
  depot?: number;
  lines?: Array<number>;
  nonpassenger?: number;
  onDemand?: number;
  stopCode?: string | number | null;
  stopDesc: string;
  stopLat: number;
  stopLon: number;
  stopName?: string | null;
  stopShortName?: string | null;
  stopTimezone?: string;
  stopUrl?: string;
  subName?: number | string;
  ticketZoneBorder?: number;
  virtual?: number;
  zoneId?: number;
  zoneName?: string;
  distance?: number | string | null;
  operator?: string;
  fav?: boolean;
};

const Content: Function = (): JSX.Element[] | JSX.Element => {
  const {data: stops} = useSWR(' ', fetchAll, swrOptions);
  const [filters, setFilters] = useState<Filter>({
    operators: 'all',
    search: '',
    favs: false,
  });
  const [location, setLocation] = useState<[number, number] | null>(null);
  const [center, setCenter] = useState<[number | string | undefined, number | string | undefined]>(
      [
    process.env.REACT_APP_DEFAULT_LOC_CENTER_LAT,
    process.env.REACT_APP_DEFAULT_LOC_CENTER_LON,
  ]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeStop, setActiveStop] = useState<Stop | null>();
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [favs, setFavs] = useLocalStorageState<Array<number>>('fav', []);
  const [activeMenu, setActiveMenu] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const columns = windowDimensions.width < 640 ? 1 : 2;
  const rows = windowDimensions.height < 640 ? 1 : 2;

  const mobilemenu = (
    <Button.Group floated="right">
      <Button
        basic={activeMenu === 0 ? false : true}
        color="teal"
        onClick={() => setActiveMenu(0)}
        icon="list alternate outline"
      />
      <Button
        basic={activeMenu === 1 ? false : true}
        color="teal"
        onClick={() => setActiveMenu(1)}
        icon="map"
      />
    </Button.Group>
  );

  const handleFilters = (type: string, vlaue: string | boolean) => {
    setFilters({
      ...filters,
      [type]: vlaue,
    });
  };

  const handleLocation = (userLocation: [number, number]) => {
    setLocation(userLocation);
    setCenter(userLocation);
  };

  const manageActive = (stop: Stop) => {
    setActiveIndex(stop.stopId);
    setActiveStop(stop);
    setCenter([stop.stopLat, stop.stopLon]);
  };

  const resetActiveIndex = () => {
    setActiveIndex(null);
    setActiveStop(null);
  };

  const favourite = (fav: number) => {
    if (favs.includes(fav)) {
      let list = [...favs];
      list.splice(list.indexOf(fav), 1);
      setFavs([...list]);
    } else {
      setFavs([...favs, fav]);
    }
  };

  // const favourites = stops && stops.filter( (stop : Stop) => stop.fav && stop)
  const list = stops && stopFilter(stops, favs, filters, location);

  return (
    <>
      {/* {JSON.stringify(windowDimensions) } rows: {rows} columns: {columns} */}

      <Responsive maxWidth={630}>
        <div className="app--mobile">
          <div className="header">
            {' '}
            <span>3CStop</span>
            {mobilemenu}
          </div>
          <Stop
            mobile={columns === 1 ? true : false}
            stop={activeStop}
            reset={resetActiveIndex}
          />
          <div className="main-list mobile">
            {activeMenu === 0 ? (
              <StopList
                favourite={favourite}
                height={windowDimensions.height - 110}
                stops={list}
                activeIndex={activeIndex}
                manageActive={manageActive}
              />
            ) : ( 
              <StopMap
                userLocation={location}
                mobile
                stop={activeStop}
                stops={list}
                center={center}
                activeIndex={activeIndex}
                manageActive={manageActive}
                resetActiveIndex={resetActiveIndex}
              />
             
            )}
          </div>
        </div>
      </Responsive>
      <Responsive minWidth={631}>
        <Grid columns={2}>
          <Grid.Column>
            <div className="main-list">
              <StopList
                favourite={favourite}
                height={windowDimensions.height - 60}
                stops={list}
                activeIndex={activeIndex}
                manageActive={manageActive}
              />
            </div>
          </Grid.Column>
          <Grid.Column>
            {/* <div className={`layout__column${activeStop && rows > 1 ? '--half-height' :  '--full-height'}`}  > */}
            <div className={`layout__column--full-height`}>
              <StopMap
                stop={activeStop}
                stops={list}
                center={center}
                activeIndex={activeIndex}
                manageActive={manageActive}
                resetActiveIndex={resetActiveIndex}
              />
            </div>
            {/* <div className={`layout__column${activeStop && rows > 1 ? '--half-height' : '--full-height'}`}  >
                        <Stop mobile={columns===1 ? true : false} stop={activeStop} reset={resetActiveIndex} />
                        </div> */}
          </Grid.Column>
        </Grid>
      </Responsive>
      <Filter
        filters={filters}
        handleFilters={handleFilters}
        location={handleLocation}
      />
    </>
  );
};
export default Content;
