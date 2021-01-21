import React from 'react';
import styled from 'styled-components';
import {device, mediaQueryTransition} from '../../../style/breakpoints';

// -----------------------------------------------------------------------------

const StyledMenu = styled.div`
  text-align: center;
  background-color: #222;
  min-height: 100vh;
  width: 80px;

  @media ${device.laptop} {
    width: 300px;
  }

  ${mediaQueryTransition}
`;

const Menu = () => <StyledMenu></StyledMenu>;

// -----------------------------------------------------------------------------

export default Menu;
