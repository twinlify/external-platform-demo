import React, {useEffect} from 'react';
import styled from 'styled-components';
import createNexus from '../../lib/create-nexus';

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

const NEXUS_VERSION = '0.2.14';

const localCss = `http://localhost/nexus-dist/min/nexus-${NEXUS_VERSION}.css`;
const localJs = `http://localhost/nexus-dist/min/nexus-${NEXUS_VERSION}.debug.js`;

const productionCss = `https://static.twinlify.com/apps/nexus-${NEXUS_VERSION}.css`;
const productionJs = `https://static.twinlify.com/apps/nexus-${NEXUS_VERSION}.min.js`;

const production = window.location.hostname === 'app.twinlify.com';
const cssUrl = production ? productionCss : localCss;
const jsUrl = production ? productionJs : localJs;

// -----------------------------------------------------------------------------

const nexusWrapper = 'nexusWrapper';

const Screen = () => {
  useEffect(() => {
    createNexus({
      cssUrl,
      jsUrl,
      container: nexusWrapper
    });
  });

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
