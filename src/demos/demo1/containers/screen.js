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
      configId: 'demo1'
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
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [103.849930150763313, 1.284094470971986],
            [103.849868755405211, 1.284173704035499],
            [103.849851001101953, 1.284159954282746],
            [103.849855952615783, 1.284153564374763],
            [103.849849561102531, 1.284148614104515],
            [103.8498446095887, 1.28415500401252],
            [103.84979773998873, 1.284118704125956],
            [103.849802690604278, 1.284112314217869],
            [103.849796299091025, 1.284107364845613],
            [103.849791348475492, 1.28411375385564],
            [103.849773595070531, 1.284100004102538],
            [103.849834989530308, 1.284020771036741],
            [103.849873338609783, 1.284050470863446],
            [103.849887248596787, 1.284061261598652],
            [103.849930150763313, 1.284094470971986]
          ]
        ]
      }
    };

    nexus.createDevice({
      id: 'zone-2-1',
      feature,
      model: {
        type: 'polygon'
      },
      properties: {
        opacity: 0.4,
        depth: 0.1,
        level: 2
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
      deviceId: 'zone-2-1',
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
