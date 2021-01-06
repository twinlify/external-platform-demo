import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------

const StyledScreen = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  width: 100%;
`;

// -----------------------------------------------------------------------------

const Screen = () => (
  <StyledScreen>
    <h2>screen</h2>
  </StyledScreen>
);

// -----------------------------------------------------------------------------

export default Screen;
