import React, { PropTypes } from 'react';
import PageTitle from '../../components/PageTitle';

class Soliton extends React.component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    let title = 'Time Series smoothing ';
    this.context.onSetTitle(title);
    return (
    <div>
      <PageTitle title={title} />
      <p>This section is under construction, check github.com/CavHack/airglow for recent updates</p>
    </div>
  );
  }
}

export default Soliton;
