import React from 'react';
import {
  View,
  Animated
} from 'react-vr';

import { Easing } from 'react-native';

//import MenuButtons
//Title
//From Components

class DashboardLayout extends React.Component {

  constructor(props) {
    super(props);
    //Define state
    this.state = {
      slideLeft: new Animated.value(-1),
      fadeIn: new Animated.Value(0),
      borderWidths: [0, 0, 0, 0, 0, 0] //lie graph
      selectionIndex:"",
      stage: 1 //index for AJAX
    };
  }

  componentDidMount(){
    //We want to have an animation that translates
    //the dashboard from 2D to 3D
    //Stereographically
    Animated.sequence([
      Animated.parallel([
        Animated.timing(
          this.state.slideLeft,
          {
            toValue:0,
            duration: 2000,
            easing: Easing.ease
          }
        ),
        Animated.timing(
          this.state.fadeIn,
          {
            toValue:1,
            duration: 2000,
            easing: Easing.ease
          }

        )
      ])
    ]).start();
  }

  //Input cipher
  updateStage(input) {
    if (this.state.showButton == false) {
      this.setState({showButton: true});

    }


    switch (input) {
      case 1:
        this.setState(borderWidths:)
    }
  }
}
