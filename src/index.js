import 'regenerator-runtime/runtime';
import React from 'react';
import {render} from 'react-dom';
import Platform from './app/platform';

// -----------------------------------------------------------------------------

const createPlatform = (options = {}) => {
  if (!options.containerId) {
    console.error('[createPlatform] Requires a containerId.');
  }

  const container = document.getElementById(options.containerId);
  render(<Platform />, container);
};

// -----------------------------------------------------------------------------

if (window && !window.createPlatform) {
  window.createPlatform = createPlatform;
}

// -----------------------------------------------------------------------------
