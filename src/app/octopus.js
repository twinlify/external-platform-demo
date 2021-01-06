import React from 'react';
import styled from 'styled-components';

import Menu from './containers/menu';
import Screen from './containers/screen';

// -----------------------------------------------------------------------------

const StyledApp = styled.div`
  text-align: center;
  background-color: #ff0;
  min-height: 100vh;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  color: white;
  position: relative;
  overflow: hidden;
  display: flex;
`;

// -----------------------------------------------------------------------------

const Octopus = () => (
  <StyledApp>
    <Menu />
    <Screen />
  </StyledApp>
);

export default Octopus;
