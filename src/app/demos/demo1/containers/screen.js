import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------

const $Screen = styled.div`
  position: relative;
  text-align: center;
  background-color: #282c34;
  height: calc(100vh - 80px);
  width: 100%;
`;

const $Title = styled.p`
  width: 100%;
  padding: 0 100px;
  font-size: 19px;
  box-sizing: border-box;
`;

const $Nexus = styled.div`
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
  //   createNexus(
  //     {
  //       cssUrl,
  //       jsUrl,
  //       clientId: production ? 'twinlify' : 'localhost',
  //       container: nexusWrapper
  //     },
  //     onceCreated
  //   );
  // });
};

// -----------------------------------------------------------------------------

const Screen = () => {
  return (
    <$Screen>
      <$Title>
        This is how you can integrate a Twinlify visualisator in your platform
      </$Title>
      <$Nexus id={nexusWrapper} />
    </$Screen>
  );
};

// -----------------------------------------------------------------------------

export default Screen;
