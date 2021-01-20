import 'regenerator-runtime/runtime';
import React from 'react';
import {render} from 'react-dom';
import Platform from './app/platform';

const createPlatform = (options = {}) => {
  if (!options.container) {
    console.error('[createPlatform] Requires a container.');
  }

  const container = document.getElementById(options.container);
  render(<Platform />, container);
};

if (window && !window.createPlatform) {
  window.createPlatform = createPlatform;
}

export default createPlatform;
