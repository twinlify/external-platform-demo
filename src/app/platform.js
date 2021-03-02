import React, {useEffect, useState} from 'react';
import styled, {createGlobalStyle} from 'styled-components';

// -----------------------------------------------------------------------------

import loadNexus from '../lib/load-nexus';
import Header from './components/header';

import Demo1 from './demos/demo1';
import Demo2 from './demos/demo2';
import Demo3 from './demos/demo3';

// -----------------------------------------------------------------------------

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

// -----------------------------------------------------------------------------

const $App = styled.div`
  text-align: center;
  background-color: #101;
  min-height: 100vh;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  color: white;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

// -----------------------------------------------------------------------------

const NEXUS_VERSION = '0.7.2';
const localCss = `http://localhost/nexus-dist/min/nexus-${NEXUS_VERSION}.css`;
const localJs = `http://localhost/nexus-dist/min/nexus-${NEXUS_VERSION}.debug.js`;

const productionCss = `https://static.twinlify.com/apps/nexus-${NEXUS_VERSION}.css`;
const productionJs = `https://static.twinlify.com/apps/nexus-${NEXUS_VERSION}.min.js`;

const production = window.location.hostname.indexOf('local') === -1;
const cssUrl = production ? productionCss : localCss;
const jsUrl = production ? productionJs : localJs;

// -----------------------------------------------------------------------------

const Demo = num => {
  switch (num) {
    case 1:
      return <Demo1 />;
    case 2:
      return <Demo2 />;
    case 3:
      return <Demo3 />;
    default:
      return <p>No demo {num}</p>;
  }
};

// -----------------------------------------------------------------------------

const Platform = () => {
  const [loading, setLoading] = useState(true);
  const [selectedDemo, selectDemo] = useState(1);

  const loadPlatform = async () => {
    await loadNexus({
      cssUrl,
      jsUrl
    });
    setLoading(false);
  };

  useEffect(loadPlatform, []);

  return (
    <$App>
      <GlobalStyle />
      <Header selectDemo={selectDemo} selectedDemo={selectedDemo} />
      {loading ? <p>Loading...</p> : Demo(selectedDemo)}
    </$App>
  );
};

// -----------------------------------------------------------------------------

export default Platform;
