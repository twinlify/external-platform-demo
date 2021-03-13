const chalk = require('chalk');
const esbuild = require('esbuild');
const svgrPlugin = require('esbuild-plugin-svgr');
const brotli = require('./compress');

const DIST = 'dist';
const bundleName = `app`;

const banner = `/**
 * BUNDLED with esbuild
 * (c) 2020 Evan Wallace
 * https://github.com/evanw/esbuild
 * @license MIT
 */
`;

const resultMessage = results => {
  console.log(`${chalk.green(' ✔ Success')}`);

  results.forEach(({output, size}) => {
    console.log(
      `   ${chalk.cyan('→')} ${chalk.hex('#D07CFF').bold(`${output}`)} ${
        size ? chalk.yellow(size) : ''
      }`
    );
  });

  console.log(' ');
};

const buildApp = ({debug}) => {
  const MODE = debug ? 'debug' : 'min';
  const outfile = `${DIST}/${MODE}/${bundleName}.${MODE}.js`;
  const compress = !debug;
  const minify = !debug;
  const sourcemap = debug;

  esbuild
    .build({
      entryPoints: ['src/index.js'],
      outfile,
      format: 'cjs',
      banner: {js: banner},
      loader: {'.js': 'jsx'},
      bundle: true,
      sourcemap,
      minify,
      metafile: true,
      plugins: [svgrPlugin()],
      define: {
        'process.env.NODE_ENV': '"production"'
      }
    })
    .then(result => {
      const metafile = result.metafile;
      if (compress) {
        brotli(metafile).then(results => {
          resultMessage(results);
        });
      } else {
        resultMessage([{output: outfile}]);
      }
    })
    .catch(() => process.exit(1));
};

const outputs = [{debug: true}, {debug: false}];

outputs.forEach(buildApp);
