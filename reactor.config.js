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
  },
  sitemap: {
    publicPath: './public',
    hostname: 'https://platform.twinlify.com',
    links: [
      {url: '/', lastmod: new Date()},
      {url: '/demo1/', lastmod: new Date()},
      {url: '/demo2/', lastmod: new Date()}
    ]
  }
};
