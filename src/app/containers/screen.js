import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------

const StyledScreen = styled.div`
  position: relative;
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  width: 100%;
`;

const Title = styled.p`
  width: 100%;
  padding: 20px 20%;
  box-sizing: border-box;
`;

const Nexus = styled.div`
  position: absolute;
  background-color: #ff0;
  top: 120px;
  left: 50%;
  translate: -50%;
  width: 80%;
  height: calc(80% - 120px);
`;

// -----------------------------------------------------------------------------

const Screen = () => (
  <StyledScreen>
    <Title>
      This is how you can integrate a Twinlify visualisator in your platform
    </Title>
    <Nexus />
  </StyledScreen>
);

// -----------------------------------------------------------------------------

export default Screen;
