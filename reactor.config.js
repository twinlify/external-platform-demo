module.exports = {
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
