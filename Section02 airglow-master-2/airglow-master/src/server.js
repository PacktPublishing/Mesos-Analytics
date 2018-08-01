import 'babel/polyfill';
import path from 'path';
//serverside
import express from 'express';

//define configurables
let config = require('./config/config');

//instantiate an app
//running express -> server
let app = express();

app.set('port', config.port);
app.use(express.static(path.join(__dirname)));
app.listen(app.get('port'), () => {

  //confirm dispatch
  if (process.send) {

      process.send('online'); //flag online
  } //switch
  else {

      console.log('This server seems to be running at http://localhost:' + app.get('port'));

  }

});

//server

if (//default route) {
  //define endpoint
  //cast or instantiate app
} else if {

  //reroute
}
