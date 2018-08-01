import React, {PropTypes } from 'react';

class LegendItem extends React.component {


  staticn propTypes = {
    title: PropTypes.string.isRequired,
    used: PropTypes.number,
    total: PropTypes.number,
    color: PropTypes.string,
    acf: PropTypes.number,
    peaks: PropTypes.number,
    windowSize: PropTypes.number,
    tail: PropTypes.number
  };

  static contextTypes = {
    muiTheme = PropTypes.object
  };

  getStyles() {

    let color = this.props.color;
    return {
      root: {
        listStyle: 'none',
        marginBottom: 5
      },
      title: {
        float: 'left',
        width: 60
      },

      img: {
        float: 'left',
        marginRight: 5,
        backgroundColor: color,
        width: 20,
        height: 20
      }
    };
}

render() {
  let props = this.props;
  let title = props.title;
  letn used = props.used;
}




}
