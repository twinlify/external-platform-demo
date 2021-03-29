import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {createGlobalStyle} from 'styled-components';
import {globalStyle} from '@twinlify/walrus';

import Platform from './platform';

// -----------------------------------------------------------------------------

const GlobalStyle = createGlobalStyle`${globalStyle}`;

// -----------------------------------------------------------------------------

const createPlatform = (options = {}) => {
  if (!options.containerId) {
    console.error('[createPlatform] Requires a containerId.');
  }

  const container = document.getElementById(options.containerId);
  render(
    <Router>
      <GlobalStyle />
      <Platform />
    </Router>,
    container
  );
};

// -----------------------------------------------------------------------------

if (window && !window.createPlatform) {
  window.createPlatform = createPlatform;
}

// -----------------------------------------------------------------------------
