import React from 'react';
import styled from 'styled-components';
import {device} from '@twinlify/walrus';

// -----------------------------------------------------------------------------

const $Img = styled.img`
  width: 70px;
  padding: 5px;
  box-sizing: border-box;

  @media ${device.laptop} {
    margin-left: 20px;
  }

  transition: all 0.4s;
`;

const Logo = () => (
  <$Img
    alt="twinlify"
    src="https://static.twinlify.com/logos/logo-256-white-text-20210106.png"
  />
);

// -----------------------------------------------------------------------------

export default Logo;
