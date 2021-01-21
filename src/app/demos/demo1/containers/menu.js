import React from 'react';
import styled from 'styled-components';
import $Button from '../../../components/button';
import {device, mediaQueryTransition} from '../../../style/breakpoints';

// -----------------------------------------------------------------------------

const $$Button = styled($Button)`
  width: 100%;
  height: 40px;
  margin-bottom: 5px;
`;

// -----------------------------------------------------------------------------

const $Menu = styled.div`
  text-align: center;
  background-color: #222;
  height: calc(100vh - 80px);
  padding: 10px;
  box-sizing: border-box;
  width: 80px;

  @media ${device.tablet} {
    width: 300px;
  }

  overflow-x: hidden;
  overflow-y: scroll;

  ${mediaQueryTransition}
`;

// -----------------------------------------------------------------------------

const Entry = ({name, value, date}) => (
  <$$Button
    selected={false}
    // onClick={handleClick(num)}
  >
    {name}
  </$$Button>
);

// -----------------------------------------------------------------------------

const Menu = ({timeSeries}) => (
  <$Menu>
    {timeSeries.map(([date, value], index) => (
      <Entry key={index} name={`VALUE-${index}`} value={value} date={date} />
    ))}
  </$Menu>
);

// -----------------------------------------------------------------------------

export default Menu;
