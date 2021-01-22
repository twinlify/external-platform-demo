import React, {useEffect} from 'react';
import styled from 'styled-components';

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

const DEMO_CONNECTION_ID = 'demoTimeSeries';
const containerId = 'nexusContainer';

// -----------------------------------------------------------------------------

const createNexus = () => {
  window.Nexus.create({
    clientId: 'localhost',
    // clientId: production ? 'twinlify' : 'localhost',
    containerId
  });
};

// -----------------------------------------------------------------------------

const Screen = props => {
  const [date, value] = props.selectedEntry || [];

  useEffect(createNexus, []);

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
        <span>{date}</span>
        <span>{value}</span>
      </$Title>
      <$NexusContainer id={containerId} />
    </$Screen>
  );
};

// -----------------------------------------------------------------------------

export default Screen;
