import 'regenerator-runtime/runtime';
import React from 'react';
import {render} from 'react-dom';

const createOctopus = (options = {}) => {
  if (!options.container) {
    console.error('[createOctopus] Requires a container.');
  }

  const container = document.getElementById(options.container);
  render(
    <div>
      <b>🐙 Octopus</b>
    </div>,
    container
  );
};

if (window && !window.createOctopus) {
  window.createOctopus = createOctopus;
}

export default createOctopus;
