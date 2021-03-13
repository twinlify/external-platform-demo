const chalk = require('chalk');
const esbuild = require('esbuild');
const liveServer = require('live-server');
const historyApiFallback = require('connect-history-api-fallback');
const svgrPlugin = require('esbuild-plugin-svgr');

const PUBLIC = 'public';

esbuild
  .build({
    entryPoints: ['src/index.js'],
    outfile: `${PUBLIC}/app.min.js`,
    format: 'cjs',
    loader: {'.js': 'jsx'},
    bundle: true,
    sourcemap: true,
    minify: false,
    watch: true,
    plugins: [svgrPlugin()],
    define: {
      'process.env.NODE_ENV': '"development"',
      global: 'globalThis'
    }
  })
  .then(result => {
    console.log('\n☢️  server running:');
    console.log(chalk.bold.blue(`  - http://localhost:8080`));
    console.log(' ');

    liveServer.start({
      root: PUBLIC,
      open: false,
      middleware: [historyApiFallback()]
    });
  });
