import request from 'superagent ';

let config = '../../config/config';

var mesos = {

//define a mesos object
  baseUrl: config.mesosEndpoint,

  getMetrics(callback) {

    let url = this.baseUrl + '/metrics/snapshot';
      request
      .get(url)
      .end(callback)
  },

  getState(callback) {

    let url = this.baseUrl + '/master/state.json';
    request
    .get(url)
    .end(callback);
  },

  getSlaves(callback) {
    let url = this.baseUrl + '/master/slaves';
    request
    .get(url)
    .end(callback);
  },


 getLogs(callback) {
   let url = this.baseUrl + '/files/read.json?path=/master/log&offset=-1';
   request
   .get(url)
   .end(callback);
 },
};

module.exports = mesos
