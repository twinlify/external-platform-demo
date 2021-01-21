import axios from 'axios';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Menu from './containers/menu';
import Screen from './containers/screen';

// -----------------------------------------------------------------------------

const $Demo = styled.div`
  display: flex;
  flex-direction: row;
`;

// -----------------------------------------------------------------------------

const fetchDemoTimeSeries = async () => {
  const fetched = await axios.get(
    'https://connections.twinlify.com/machinechat/demo'
  );

  const result = fetched.data;
  const timeSeries = result.data;
  return timeSeries;
};

// -----------------------------------------------------------------------------

const Demo = () => {
  const [timeSeries, setTimeSeries] = useState([]);

  const loadInitialData = async () => {
    const fetchedTimeSeries = await fetchDemoTimeSeries();
    setTimeSeries(fetchedTimeSeries);
  };

  useEffect(loadInitialData, []);

  return (
    <$Demo>
      <Menu timeSeries={timeSeries} />
      <Screen />
    </$Demo>
  );
};

export default Demo;
