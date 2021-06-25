// -----------------------------------------------------------------------------

import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Nexus from '@twinlify/nexus';
import createRoom from '../create-room';
import createSphere from '../create-sphere';
import moveSphere from '../move-sphere';

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
      configId: 'rooms-empty'
    }).then(setNexus);

    return () => {
      // should dispatch a deleteNexus
    };
  }, []);

  // -----------------------------------
  // on nexus creation

  useEffect(() => {
    if (!nexus) return;

    nexus.closeMenu();

    nexus.addColoring({
      id: 'temperatureColoring',
      steps: [18, 21, 24, 27],
      colors: ['#33f', '#33bb77', '#f3e942', '#f18842', '#d33a3a']
    });

    createRoom(nexus);
    createSphere(nexus);
    moveSphere(nexus);
  }, [nexus]);

  // -----------------------------------
  // on update selected room data

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
      <$Title></$Title>
      <$NexusContainer id={containerId} />
    </$Screen>
  );
};

// -----------------------------------------------------------------------------

export default Screen;
