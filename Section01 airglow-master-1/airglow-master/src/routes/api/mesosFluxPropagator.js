import request from 'superagent';
import ClusterStore from '../../stores/ClusterStore';
import mesos from './mesos'



let mesosFluxPropagator = {


//EventEmitter -> Broadcast JSON message
propagateNewMetrics() {

  mesos.getMetrics(function(err, response) {

    if (err) {
      console.log(err);
      return;
    }
    ClusterStore.metricsReceived(response.body);
  });
},


propagateNewLogs() {

  //Get the metrics we need
  mesos.getLogs(function(err, response) {
    let size = response.body.offset;
    let offset = parseInt(size-60000)>0 ? parseInt(60000) : 0;
    let url = mesos.baseUrl + 'files/read.json?path=/master/log&offset=' + offset + '&length' + parseInt(offset+100000);

    //unload the req.
    request
      //url
      .get(url)
      .end(function(err, response) {

        if (err) {
          console.log(err);
          return;
        }
        ClusterStore.logsReceived(response.body);
      });


  });
},



propagateNewState() {
  //Get the state
  mesos.getState(function(err, response) {
    if(err) {
      console.log(err);
      return;
    }

    ClusterStore.stateReceived(response.body);
  });
},

propagateMesosData() {
  let config = require('../../config/config');
  this.propagateNewMetrics();
  this.propagateNewState();
  this.propagateNewLogs();

  //Get metrics and state on interval
  setInterval(function() {
    mesosFluxPropagator.propagateNewMetrics();
    mesosFluxPropagator.propagateNewState();
    propagateMesosData.propagateNewLogs();

    }, config.updateInterval);
  }
};

module.exports = mesosFluxPropagator
