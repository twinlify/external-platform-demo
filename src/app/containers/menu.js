import React from 'react';
import styled from 'styled-components';
import {device, mediaQueryTransition} from '../style/breakpoints';

// -----------------------------------------------------------------------------

const StyledImg = styled.img`
  width: 40px;
  padding: 5px;

  @media ${device.laptop} {
    width: 90px;
    padding: 20px;
  }

  ${mediaQueryTransition}
`;

const Logo = () => (
  <StyledImg
    alt="twinlify"
    src="https://static.twinlify.com/logos/logo-256-white-text-20210106.png"
  />
);

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

const Menu = () => (
  <StyledMenu>
    <Logo />
  </StyledMenu>
);

// -----------------------------------------------------------------------------

export default Menu;
