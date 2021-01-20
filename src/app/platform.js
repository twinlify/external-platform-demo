import React, {useEffect, useState} from 'react';
import styled, {createGlobalStyle} from 'styled-components';

import GithubCorner from './components/github-corner';
import axios from 'axios';
import loadNexus from '../lib/load-nexus';
import Logo from './components/logo';

// -----------------------------------------------------------------------------

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

// -----------------------------------------------------------------------------

const StyledApp = styled.div`
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

const NEXUS_VERSION = '0.4.2';
const localCss = `http://localhost/nexus-dist/min/nexus-${NEXUS_VERSION}.css`;
const localJs = `http://localhost/nexus-dist/min/nexus-${NEXUS_VERSION}.debug.js`;

const productionCss = `https://static.twinlify.com/apps/nexus-${NEXUS_VERSION}.css`;
const productionJs = `https://static.twinlify.com/apps/nexus-${NEXUS_VERSION}.min.js`;

const production = window.location.hostname.indexOf('local') === -1;
const cssUrl = production ? productionCss : localCss;
const jsUrl = production ? productionJs : localJs;

// -----------------------------------------------------------------------------

const fetchDemoData = async () => {
  const fetched = await axios.get(
    'http://connections.twinlify.com/machinechat/demo'
  );

  return fetched.data;
};

// -----------------------------------------------------------------------------

const HEADER_HEIGHT = 80;

const $Header = styled.div`
  background-color: #123;

  height: ${HEADER_HEIGHT}px;
  width: 100%;
  padding: 0px 120px 0px 20px;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const $DemoSelection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const $DemoButton = styled.div`
  width: ${HEADER_HEIGHT - 10}px;
  height: ${HEADER_HEIGHT - 10}px;
  background-color: #1e7ab9;
  border-radius: 5px;
  margin-right: 5px;
  font-size: 15px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #559aee;
  }

  transition: background-color 0.5s;
`;

// -----------------------------------------------------------------------------

const Header = () => {
  return (
    <$Header>
      <Logo />
      <$DemoSelection>
        <$DemoButton>Demo 1</$DemoButton>
        <$DemoButton>Demo 2</$DemoButton>
        <$DemoButton>Demo 3</$DemoButton>
      </$DemoSelection>
    </$Header>
  );
};

// -----------------------------------------------------------------------------

const Platform = () => {
  const [loading, setLoading] = useState(true);

  const loadPlatform = async () => {
    await loadNexus({
      cssUrl,
      jsUrl
    });

    setLoading(false);
  };

  useEffect(loadPlatform, []);

  return (
    <StyledApp>
      <GlobalStyle />
      <Header />
      {loading ? <p>Loading...</p> : <p>Select demo</p>}
      {/* {Demo} */}
      {/* <Menu timeSeriesDemo={timeSeriesDemo} />
      <Screen timeSeriesDemo={timeSeriesDemo} /> */}
      <GithubCorner />
    </StyledApp>
  );
};

export default Platform;
