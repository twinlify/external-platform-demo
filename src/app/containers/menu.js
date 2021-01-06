import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------

const StyledImg = styled.img`
  width: 90px;
  padding: 20px;
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
  width: 300px;
`;

const Menu = () => (
  <StyledMenu>
    <Logo />
  </StyledMenu>
);

// -----------------------------------------------------------------------------

export default Menu;
