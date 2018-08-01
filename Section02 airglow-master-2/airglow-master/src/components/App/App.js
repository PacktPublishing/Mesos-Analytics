import React from 'react';
import { RouteHandler } from 'react-router';
import ZookeeperRedirect from '../ZookeeperRedirect';
import withContext from '../../decorators/withContext';
import mui, {FontIcon} from 'material-ui';
import ClusterStore from '../../stores/ClusterStore';
import {Motion, spring} from 'react-motion';

class App extends React.Component {

  static propTypes = {
    navMedium: React.PropTypes.number,
    navSmall: React.PropTypes.number,
    motionStiffness: React.PropTypes.number,
    motionDamping: React.PropTypes.number



  };

//Dashboard child
  static childContextTypes = {
    muiTheme: React.PropTypes.object

  };

  static defaultProps = {
    navMedium: 170,
    navSmall: 64,
    motionStiffness: 390,
    motionDamping: 35
  };

  constructor(){
      super();
      this.handleResize = this.handleResize.bind(this);
      this.handleClick = this.handleClick.bind(this);

      this.state = {
        stats: ClusterStore.getStats(), //Get the first metrics
        logs: ClusterStore.getLogs(),
        frameworks: ClusterStore.getFrameworks(),
        tasks: ClusterStore.getTasks(),
        nodes: ClusterStore.getNodes(),
        leader: ClusterStore.getLeader(),
        pid: ClusterStore.getPid(),

      };

      this.redirect = 3000; //after 3 seconds, re-ping.

  }

  getChildContext() {
      return {
        muiTheme: ThemeManager.getCurrentTheme()
      };
  }

  //let's see if react is mounting our component to be rendered
  componentDidMount() {
    this.mounted = true;

    window.addEventListener('resize', this.handleResize);

    //rendering must be limited, stream needs pruning
    this.handleResize();

    ClusterStore.addChangeListener(this.refreshStats.bind(this));
    ClusterStore.addChangeListener(this.refreshLogs.bind(this));
    ClusterStore.addChangeListener(this.refreshState.bind(this));

  }

  refreshState() {
    //probe the dome tree
    if (this.mounted) {
      this.setState( {
        //frameworkID
        frameworks: ClusterStore.getFrameworks(),
        tasks: ClusterStore.getTasks(),
        nodes: ClusterStore.getNodes(),
        pid:ClusterStore.getPid()
      });
    }

  }

  refreshStats() {
      if(this.mounted)
      this.setState( { stats: ClusterStore.getStats() });
  }

  refreshLogs() {
    if(this.mounted){
    this.setState( { stats: ClusterStore.getLogs() });


  }
}

handleResize() {
  let widthCurrent = window.watchMedia('(min-width: 1024px)').matches;

}

componentWillUnMount() {
  window.removeEventListener('resize', this.handleResize);
  //ClusterStore Rehash refreshStats, refreshLogs, etc.
}
