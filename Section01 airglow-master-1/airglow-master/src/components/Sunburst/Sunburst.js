import React from 'react';
import d3 from 'd3';
import _ from 'lodash';
import Legend from './Legend.js'
import { Styles, Utils } from 'material-ui';

let { Colors } = Styles;
let { ColorManipulator } = utils;

class Sunburst extends React.Component {


  static propTypes = {
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    totalResources: React.PropTypes.object.isRequired,
    usedResources: React.PropTypes.object.isRequired,
    colors: React.PropTypes.object,
    transitionDuration: React.PropTypes.number
  };

  static contextTypes = {
    muiTheme: React.PropTypes.object
  };

  static defaultProps = {
    width: 200,
    height: 200,
    data: [],
    transitionDuration: 1000,
    colors: {
      cpus: Colors.deepPurple700, /* @todo pull this from the theme */
      mem: Colors.cyan500,
      disk: Colors.orange500,
      canvas: ColorManipulator.fade(Colors.darkBlack, 0.1)
    }
  };

  drawInitialComponent(props){
    let twoPie = 2 * Math.PI;
    let totalResources = _.omit(props.totalResources, 'ports', 'ephemeral_ports');
    let usedResources = _.omit(props.usedResources, 'ports', 'ephemeral_ports');
    let outerRadius = props.width / 2.;
    let innerRadius = props.width / 2.24;
    let radiusDifference = 12;
    let index=0;
    let _this = this;
    let colors = this.props.colors;
    let canvasColour = colors.canvas;

      let svg = d3.select(React.findDOMNode(this.refs.svg))
        .append('g')
        .attr('transform', 'translate(' + (props.width) / 2 + ',' + (props.height) / 2 + ')');


        //Pie chart loop
        _.forIn(totalResources, function(value, key) {

          _this.arcs[key] = d3.svg.arc()
          .outerRadius(outerRadius - (index * radiusDifference))
          .innerRadius(innerRadius - (index * radiusDifference))
          .starAngle(0);

          svg.append('path')
          .datum({endAngle: twoPie})
          .style('fill', canvasColour)
          .attr('class', key)
          .attr('d', _this.arcs[key]);

          index++;
        });
  }






}
