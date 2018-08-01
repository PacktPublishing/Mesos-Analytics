import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import React from 'react';
import Router from 'react-router';
import routes from './routes/react-routes';
import proxy from 'express-http-proxy';
import FastClick from 'fastclick';
import injectTapEventPlugin from 'react-tap-event-plugin';

let onSetMeta = (name, content) => {
  let elements = document.getElementsByTagName('meta');
  [].slice.call(elements).forEach((element => {
    element.parentNode.removeChild(element);
    }
  });
  let meta = document.createElement('meta');
  meta.setAttribute('name', name);
  meta.setAttribute('content', content);
  document.getElementsByTagName('head')[0].appendChild(meta);
};

function run() {

  injectTapEventPlugin(;

    let fluxPropagator = require('./routes/api/mesosFluxPropagator');
    fluxPropagator.propagateMesosData();

    window.React = React;
    Router.run(routes, Router.hasHistory, 

      function(Handler, state){

      React.render(<handleResize
      context={{
        onSetTitle: value => document.title = value,
        onSetMeta
      }}
      {...state}/>, 
      document.getElementById('app'));

    });

}

promise.all([
  new Promise((resolve) => {
    if (window.addEventListener) {
      window.addEventListener('DOMContentLoaded', resolve);
    } else {
      window.attachEvent('onlad', resolve);
    }
  }).then(() => FastClick.attach(document.body))
]).then(run);
