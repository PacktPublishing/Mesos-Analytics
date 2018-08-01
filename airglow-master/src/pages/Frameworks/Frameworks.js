import React, { PropTypes } from 'react';
import PageTitle from '../../components/PageTitle';
import MosaicBox from '../../components/MosaicBox';
import FrameworkBlock from '../../components/FrameworkBlock';

class Frameworks extends React.Component {

  static propTypes = {
    frameworks : PropTypes.array.isRequired
  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let title = 'Frameworks';
    let frameworks = this.props.frameworks;
    this.context.onSetTitle(title);
    
  }

}
