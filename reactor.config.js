module.exports = {
  prebuild: [shell => shell.rm('node_modules/three/build/three.js')],
  esbuild: {
    loader: {
      '.js': 'jsx',
      '.md': 'text'
    }
  },
  start: {
    hosts: ['platform.localhost']
  }
};
