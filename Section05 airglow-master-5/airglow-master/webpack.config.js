import webpack, { DefinePlugin, BannerPlugin} from 'webpack';
import merge from 'lodash/object/merge';
import autoprefixer from 'autoprefixer-core';
import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));
const DEBUG = !argv.release;
const STYLE_LOADER = 'style-loader/useable';
const CSS_LOADER = DEBUG ? 'css-loader' : 'css-loader?minimize';
const AUTOPREFIXER_BROWSERS = [];

const GLOBALS = {
  //Process envelope
  //Default to Production
  'process.env.NODE_ENV': DEBUG ? '"development" : "production"',
  '__DEV__' : DEBUG //for now
};

const config = {

  //we need an output - think mux
  output : {
    //async
    //source
    publicPath: './',
    sourcePrefix: ''
  },

  cache: DEBUG,
  debug: DEBUG,

  stats: {
      colors: true,
      reasons: DEBUG
  },





};

//Work on the config

const appConfig = merge({}, config, {

  //define a point of entry
  entry: './src/app.js'



})
