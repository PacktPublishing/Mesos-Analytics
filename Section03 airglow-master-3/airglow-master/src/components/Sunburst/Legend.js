import React, { PropTypes } from 'react';
import { Styles, Utils } from 'material-ui';
let { Colors } = Styles;

class Legend extends React.Component {

  static defaultProps = {
    colors: {
      cpus: Colors.deepPurple700,
      mem: Colors.cyan500,
      disk: Colors.orange500
    }
  };


  getTitleMapping(key) {
    let titles = {
      cpus: 'CPU',
      disk: 'Disk',
      mem: 'Memory'
    };

    return titles[key];
  }

  render() {

  }







}
