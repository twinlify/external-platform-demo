import React from 'react';
import styled from 'styled-components';
import {device, mediaQueryTransition} from '../../style/breakpoints';

// -----------------------------------------------------------------------------

const $Img = styled.img`
  width: 70px;
  padding: 5px;
  box-sizing: border-box;

  @media ${device.laptop} {
    margin-left: 20px;
  }

  ${mediaQueryTransition}
`;

const Logo = () => (
  <$Img
    alt="twinlify"
    src="https://static.twinlify.com/logos/logo-256-white-text-20210106.png"
  />
);

// -----------------------------------------------------------------------------

export default Logo;
