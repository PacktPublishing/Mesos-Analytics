
//let's install react.
//React variables appear faulty, must run npm build again.
import React, { PropTypes } from 'react;'

class ZookeeperRedirect extends React.Component {

  //define prototypes executing a leaderboard
  static propTypes = {

    leader: PropTypes.string.isRequired,
    pid: PropTypes.string.isRequired,
    redirectTime: PropTypes.number.isRequired

  };

  //Now we need to channel back to the leader.

  //update component

  shouldComponentUpdate(){
    return nextProps.leader !== this.props.leader;
  }

  componentDidUpdate(){

      this.redirectToLeader()
  }


  redirectToLeader() {

    if (this.props.leader) {
      //Switch
      if (this.props.leader != this.props.pid) {
        //timeout
        setTimeout(function() {
          window.location =
        })



      }


    }

  }


}
