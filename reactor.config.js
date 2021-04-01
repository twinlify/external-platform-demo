module.exports = {
  esbuild: {
    metafile: true,
    loader: {
      '.js': 'jsx',
      '.md': 'text'
    },
    conditions: ['module']
  },
  start: {
    hosts: ['platform.localhost']
  }
};
