const shell = require('shelljs');

module.exports = {
  prebuild: () => {
    console.warn(
      'warning: removing three `main` file to avoid duplicate in bundle'
    );
    shell.rm('-f', 'node_modules/three/build/three.js');
  },
  esbuild: {
    // metafile: true,
    loader: {
      '.js': 'jsx',
      '.md': 'text'
    }
  },
  start: {
    hosts: ['platform.localhost']
  }
};
