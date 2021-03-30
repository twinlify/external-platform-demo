module.exports = {
  esbuild: {
    metafile: true,
    loader: {
      '.js': 'jsx',
      '.md': 'text'
    }
  },
  start: {
    hosts: ['platform.localhost']
  }
};
