// -----------------------------------------------------------------------------
/**  @license https://tholman.com/github-corners/
 * The MIT License (MIT)
 * Copyright (c) Tim Holman
 */
// -----------------------------------------------------------------------------

import React from 'react';
import styled from 'styled-components';
import GithubCornerSVG from './github-corner.svg';

// -----------------------------------------------------------------------------

const StyledCorner = styled.a`
  :hover .github-corner_svg__octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }

  @keyframes octocat-wave {
    0%,
    100% {
      transform: rotate(0);
    }
    20%,
    60% {
      transform: rotate(-25deg);
    }
    40%,
    80% {
      transform: rotate(10deg);
    }
  }

  @media (max-width: 500px) {
    &:hover .github-corner_svg__octo-arm {
      animation: none;
    }
    & .github-corner_svg__octo-arm {
      animation: octocat-wave 560ms ease-in-out;
    }
  }
`;

// -----------------------------------------------------------------------------

const Corner = () => (
  <StyledCorner
    href="https://github.com/twinlify/external-platform-demo"
    target="__blank"
    aria-label="View source on GitHub"
  >
    <GithubCornerSVG />
  </StyledCorner>
);

// -----------------------------------------------------------------------------

export default Corner;
