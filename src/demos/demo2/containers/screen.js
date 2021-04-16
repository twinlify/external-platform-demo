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
      configId: 'rooms'
    }).then(setNexus);
  }, []);

  // -----------------------------------
  // on nexus creation

  useEffect(() => {
    if (!nexus) return;

    nexus.addColoring({
      id: 'temperatureColoring',
      steps: [18, 21, 24, 27],
      colors: ['#33f', '#33bb77', '#f3e942', '#f18842', '#d33a3a']
    });

    const reading = {
      temperature: {
        name: 'Température',
        coloring: 'temperatureColoring'
      },
      date: {
        name: 'Date'
      }
    };

    const feature = {
      type: 'Feature',
      id: 'L4-18',
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [103.742729517214, 1.33433539405487],
            [103.742737235416, 1.33442067499677],
            [103.742726678418, 1.33442162989904],
            [103.74272703878, 1.33442561174525],
            [103.742708247635, 1.33442731144304],
            [103.742707887428, 1.33442333131407],
            [103.742707887428, 1.33442333131407],
            [103.742698327643, 1.33442420087013],
            [103.742690568347, 1.33433894193086],
            [103.742729517214, 1.33433539405487]
          ]
        ]
      }
    };

    nexus.createDevice({
      id: 'zone-4-18',
      feature,
      model: {
        type: 'polygon',
        opacity: 0.4
      },
      properties: {
        level: 0
      },
      reading
    });
  }, [nexus]);

  // -----------------------------------
  // on update

  useEffect(() => {
    if (!nexus) return;

    const [date, temperature] = props.selectedEntry || [];
    if (!date) {
      return;
    }

    nexus.updateDeviceData({
      deviceId: 'zone-4-18',
      data: {
        temperature,
        date
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
