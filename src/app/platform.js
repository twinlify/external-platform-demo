import React, {useState} from 'react';
import styled, {createGlobalStyle} from 'styled-components';

// -----------------------------------------------------------------------------

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

const Demo = ({num}) => {
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
  const [selectedDemo, selectDemo] = useState(1);

  return (
    <$App>
      <GlobalStyle />
      <Header selectDemo={selectDemo} selectedDemo={selectedDemo} />
      <Demo num={selectedDemo} />
    </$App>
  );
};

// -----------------------------------------------------------------------------

export default Platform;
