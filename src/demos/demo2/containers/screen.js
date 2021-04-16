// -----------------------------------------------------------------------------

import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Nexus from '@twinlify/nexus';

// -----------------------------------------------------------------------------

const $Screen = styled.div`
  position: relative;
  text-align: center;
  background-color: #ededed;
  height: calc(100vh - 80px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box;
`;

const $Title = styled.div`
  width: 100%;
  font-size: 15px;
  text-align: left;
  padding: 10px;
  box-sizing: border-box;

  p {
    margin: 0;
    padding: 2px;
    box-sizing: border-box;
    font-weight: 100;
  }
`;

const $NexusContainer = styled.div`
  position: relative;
  background-color: #444444;
  width: calc(100% - 20px);
  height: calc(100%);
`;

// -----------------------------------------------------------------------------

const production = window.location.hostname.indexOf('local') === -1;
const containerId = 'nexusContainer';

// -----------------------------------------------------------------------------

const Screen = props => {
  const [nexus, setNexus] = useState();
  const {selectedEntry = []} = props;

  // -----------------------------------
  // on mount

  useEffect(() => {
    Nexus.create({
      clientId: production ? 'twinlify' : 'twinlify-localhost',
      containerId,
      configId: 'synox-office'
    }).then(setNexus);
  }, []);

  // -----------------------------------
  // on nexus creation

  useEffect(() => {
    if (!nexus) return;

    nexus.addColoring({
      id: 'tempRules',
      steps: [18, 21, 24, 27],
      colors: ['#33f', '#33bb77', '#f3e942', '#f18842', '#d33a3a']
    });

    const reading = {
      temperature: {
        name: 'Température',
        coloring: 'tempRules'
      }
    };

    const featurePoly = {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [3.8677980378270145, 43.600213612541815],
            [3.867798373103142, 43.60020025872323],
            [3.8678161427378654, 43.600190061259745],
            [3.86785302311182, 43.600177435826396],
            [3.8678637519478802, 43.60018933286944],
            [3.8677903264760967, 43.6002483324563],
            [3.8677980378270145, 43.600213612541815]
          ]
        ]
      }
    };

    nexus.createDevice({
      id: 'zone-1-1',
      feature: featurePoly,
      model: {
        type: 'polygon',
        opacity: 0.4
      },
      properties: {
        level: 1
      },
      reading
    });
  }, [nexus]);

  // -----------------------------------
  // on update

  useEffect(() => {
    if (!nexus) return;
    const [, temperature] = props.selectedEntry || [];

    nexus.updateDeviceData({
      deviceId: 'zone-1-1',
      data: {
        temperature
      }
    });
  }, [selectedEntry, nexus]);

  // -----------------------------------

  return (
    <$Screen>
      <$Title>
        <p>This demo shows how your platform can integrate the Nexus widget:</p>
        <p>
          - It performs an HTTP GET request, the way your platform would do, to
          fetch data,
        </p>
        <p>
          - Then it uses the widget&apos;s SDK to update the 3D scene each time
          you select a value on the list.
        </p>
      </$Title>
      <$NexusContainer id={containerId} />
    </$Screen>
  );
};

// -----------------------------------------------------------------------------

export default Screen;
