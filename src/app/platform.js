import React, {useEffect, useState} from 'react';
import styled, {createGlobalStyle, css} from 'styled-components';

import GithubCorner from './components/github-corner';
import axios from 'axios';
import loadNexus from '../lib/load-nexus';
import Logo from './components/logo';

// -----------------------------------------------------------------------------

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
  box-sizing: border-box;
  font-size: 15px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #559aee;
  }

  ${props =>
    props.selected &&
    css`
      border: 2px solid white;
    `}

  transition: background-color 0.5s, border 0.2s;
`;

// -----------------------------------------------------------------------------

const Header = ({selectDemo, selectedDemo}) => {
  const handleClick = num => () => selectDemo(num);

  const Buttons = [1, 2, 3].map(num => (
    <$DemoButton
      key={num}
      selected={selectedDemo === num}
      onClick={handleClick(num)}
    >
      Demo {num}
    </$DemoButton>
  ));

  return (
    <$Header>
      <Logo />
      <$DemoSelection>
        {Buttons}
        <GithubCorner />
      </$DemoSelection>
    </$Header>
  );
};

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
    <StyledApp>
      <GlobalStyle />
      <Header selectDemo={selectDemo} selectedDemo={selectedDemo} />
      {loading ? <p>Loading...</p> : Demo(selectedDemo)}
    </StyledApp>
  );
};

export default Platform;
