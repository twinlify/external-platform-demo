import 'regenerator-runtime/runtime';
import React from 'react';
import {render} from 'react-dom';
import Octopus from './app/octopus';

const createOctopus = (options = {}) => {
  if (!options.container) {
    console.error('[createOctopus] Requires a container.');
  }

  const container = document.getElementById(options.container);
  render(<Octopus />, container);
};

if (window && !window.createOctopus) {
  window.createOctopus = createOctopus;
}

export default createOctopus;
