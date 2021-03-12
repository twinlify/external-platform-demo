// -----------------------------------------------------------------------------

import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Nexus from '@twinlify/nexus';

// -----------------------------------------------------------------------------

const $Screen = styled.div`
  position: relative;
  text-align: center;
  background-color: #282c34;
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
      clientId: production ? 'twinlify' : 'localhost',
      containerId,
      configId: 'demo1'
    }).then(setNexus);
  }, []);

  // -----------------------------------
  // on update

  useEffect(() => {
    if (!nexus) return;

    const [date, value] = props.selectedEntry || [];

    const reader = nexus.createReader({
      colorPath: 'value',
      colorSteps: 'zonesColors',
      properties: [
        {
          name: 'Temperature',
          path: 'value'
        },
        {
          name: 'Date',
          path: 'date'
        }
      ]
    });

    nexus.updateDevice({
      deviceId: 'zone-2-1',
      rawData: {value, date},
      reader
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
          - Then it uses the widget's SDK to update the 3D scene each time you
          select a value on the list.
        </p>
      </$Title>
      <$NexusContainer id={containerId} />
    </$Screen>
  );
};

// -----------------------------------------------------------------------------

export default Screen;
