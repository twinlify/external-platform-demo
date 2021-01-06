import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------

const StyledApp = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  color: white;
  position: relative;
  overflow: hidden;
`;

const Screen = styled.div`
  margin-top: 120px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// -----------------------------------------------------------------------------

const Header = () => <h1 align="center">🐙 Octopus</h1>;

// -----------------------------------------------------------------------------

const Octopus = () => (
  <StyledApp>
    <Header />
    <Screen>
      <p>screen</p>
    </Screen>
  </StyledApp>
);

export default Octopus;
