import React, { PropTypes } from 'react';

class PageTitle extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired
  };

  getStyles() {
    let styles ={
      fontWeight: 100,
      marginBottom: 20
    };

    return styles;
  }

  render() {
    <h1 style={styles}>
      {title}
      </h1>
  };


}

export default PageTitle;
