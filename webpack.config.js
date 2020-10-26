const merge = require('webpack-merge');

const baseConfig = require('./build/webpack.base.config');
const devConfig = require('./build/webpack.dev.config');
const proConfig = require('./build/webpack.prod.config');

// const log = console.log;
// log(`process.env =\n`, process.env)
// log(`process.argv =\n`, process.argv)

module.exports = (env, args) => {
  // log(`process.env.NODE_ENV =`, process.env.NODE_ENV)
  // log(`env =`, env)
  // log(`args =\n`, args)
  const config = (args.mode === 'development') ? devConfig : proConfig;
  return merge(baseConfig, config);
};
