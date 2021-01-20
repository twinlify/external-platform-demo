import axios from 'axios';
import React, {useEffect} from 'react';
import styled from 'styled-components';
import loadNexus from '../../lib/load-nexus';

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
  padding: 0 100px;
  font-size: 19px;
  box-sizing: border-box;
`;

const Nexus = styled.div`
  position: absolute;
  background-color: #444444;
  top: 60px;
  left: 50%;
  translate: -50%;
  width: 95%;
  height: calc(95% - 60px);
`;

// -----------------------------------------------------------------------------

const DEMO_CONNECTION_ID = 'demoTimeSeries';
const nexusWrapper = 'nexusWrapper';

// -----------------------------------------------------------------------------

const createVis = () => {
  Nexus.create(nexusOptions);
    createNexus(
      {
        cssUrl,
        jsUrl,
        clientId: production ? 'twinlify' : 'localhost',
        container: nexusWrapper
      },
      onceCreated
    );
  });

  return promise;
};

// -----------------------------------------------------------------------------

const Screen = () => {

  return (
    <StyledScreen>
      <Title>
        This is how you can integrate a Twinlify visualisator in your platform
      </Title>
      <Nexus id={nexusWrapper} />
    </StyledScreen>
  );
};

// -----------------------------------------------------------------------------

export default Screen;
