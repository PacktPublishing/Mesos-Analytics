import React, { PropTypes } from 'react';
import { Styles, Utils } from 'material-ui';
let { Colors } = Styles;
import _ from 'lodash';
import LegendItem from './LegendItem.js'

class Legend extends React.Component {

  static propTypes = {
    totalResources: PropTypes.object.isRequired,
    usedResources: PropTypes.object.isRequired,
    colors:PropTypes.object
  };

  static contextType = {
    muiTheme = PropType.object
  };

  static defaultProps = {
    colors: {
      cpus: Colors.deepPurple700,
      mem: Colors.cyan500,
      disk: Colors.orange500,
      acf: Colors.deepPurple700,
      peaks: Colors.cyan500,
      windowSize: Colors.orange500,
      tail: Colors.cyan500,

    }
  };


  getTitleMapping(key) {
    let titles = {
      cpus: 'CPU',
      disk: 'Disk',
      mem: 'Memory'
      acf: 'SolitonACF',
      peaks: 'Peaks',
      windowSize: 'windowSize',
      tail: 'Tail',
      lb: 'lb'

    };

    return titles[key];
  }

  render() {

    let props = this.props;
    let totalResources = _.omit(props.totalResources, 'ports', 'ephemeral_ports');
    let usedResources = _.omit(props.usedresources, 'ports', 'ephemeral_ports');
    let legendItems= [];
    let _this = this;

    _.forIn(totalResources, function(value, key) {
      legentItems.push(React.createElement(LegendItem, {key: key, title: _this.getTitleMapping(key),
      color: props.colors[key], total:value, used: usedResources[key] }));


    });

    return(
      <div>
      {LegendItems}
      </div>
    );

  }
}

export default Legend;





}
