import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import React from 'react';
import Router from 'react-router';
import routes from './react-routes';
import express from 'express';
import proxy from 'express-http-proxy';

module.exports = function(app) {


  //Build a client
  var client = zookeeper.createClient(config.zookeeperAddress);
  var router = express.Router();
  var config = require('../config/config');
  var zookeeper = require('node-zookeeper-client');


  client.once('connected', function() {
    console.log('Connected to the Zookeeper.');


    listChildren(client, config.zookeeperPath).then(function(childrenList) {

      //Set the smallest as the leader
      childrenList.sort();
      return getData(client, config.zookeeperPath + '/' + childrenList[0]); //remember n(1 ) = 0 being the ideal or boundary value mirror?

    }).then(function(jsonData) {

      let leader = 'http://' + jsonData.address.ip + ':' + json.address.port;
      setRoutes(app, leader);

    });

  });

    client.connect();

    function setRoutes(app, leader) {

      const templateFile = path.join(__dirname, 'master/static/index.html');
      const template = _.template(fs.readFileSync(templateFile, 'utf8'));

      var config = require('../config/config');

      app.get(config.proxyPath + '/*', proxy(leader, {
        forwardPath: function(req, res) {
          let path = require('url').parse(req.url).path;

          return path.slice(config.mesosEndpoint.length);
        }



      }));

      app.get('*', function(req, res, next) {

        try {
          let data = { title: '', 
                      description: '',
                      css: '',
                      body: ''

          };
        //Array of styles
          let css = [];

          //Run the router query
          Router.run(routes, req.url, function(Handler) {
            let application = (<Handler
              context={{
                onInsertCss: value => css.push(value),
                onSetTitle: value => data.title = value,
                onSetMeta: (key, value) => data[key] = value
              }} />
          )
        };

        data.body = React.renderToString(application);
        data.css = css.join('');
        let html = template(data);
        res.send(html);


      });
} catch (err) {
  next(err);
}
});
}

    function listChildren(client, path) {
      //Promise = callback
      return new Promise(function(resolve, reject) {

        client.getChildren(
          path,
          function(event) {
            console.log('Got watcher event: %s', event);
            listChildren(client, path).then(function(childrenList) {
              //make smallest the leader.
              childrenList.sort();
              return getData(client, path + '/' + childrenList[0]);
            }).then(function(jsonData){
              var config = require('../config/config');
              //Top level react dom tree node
              let leader = 'http://' + jsonData.address.ip + ':' + jsonData.address.port;
              //Refresh stack
              app._router.stack.pop();
              app._router.stack.pop();
              setRoutes(app, leader);
            });
          },

          function (error, children, stat) {
            if (error) {
              console.log(
                'Failed',
                path,
                error
                );

              reject(Error('Broken'));
          }

          console.log('Children unsolvable/unrecheable');
          resolve(children);
        }
        );

      });
    }




  
