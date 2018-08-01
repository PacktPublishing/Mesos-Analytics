import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View
} from 'react-vr';

//import titleScene
//import Dashboard


import axios from react-native-axios;

export default class airglowVR extends React.Component {
  constructor() {
  super();
  this.state = {
    scene: 1,
    IDs: "",
    selectedStreamID: "",
    selectedEnv: "",
  }
};
}

//We need two different scenes.
render() {

  const scene = this.state.scene;
  return(
    <view>
    { scene == 1 ? (
      <TitleScene
        showButton={true};
        text={"Analyze Cluster"}
        changeScenes={this.changeScenes.bind(this)}
        scene = {this.state.scene}
      />
    ) : (
      scene  == 2 ? (
        <Dashboard
        changeScenes={this.changeScene.bind(this)}
        scene = {this.state.scene}
        />
      )
    )}
    </view>
  );

};

AppRegistry.registerComponent('airglowVR', ()=> airglowVR);
