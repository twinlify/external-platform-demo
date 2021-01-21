import axios from 'axios';
import React from 'react';
import Menu from './containers/menu';
import Screen from './containers/screen';

// -----------------------------------------------------------------------------

const fetchDemoData = async () => {
  const fetched = await axios.get(
    'http://connections.twinlify.com/machinechat/demo'
  );

  return fetched.data;
};

// -----------------------------------------------------------------------------

const Demo = () => {
  const timeSeriesDemo = [];

  return (
    <div>
      <h1>Demo 1</h1>
      <Menu timeSeriesDemo={timeSeriesDemo} />
      <Screen timeSeriesDemo={timeSeriesDemo} />
    </div>
  );
};

export default Demo;
