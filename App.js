/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { PureComponent } from "react";
import { AppRegistry, StyleSheet, StatusBar } from "react-native";
import { GameEngine } from 'react-native-game-engine';
import { Finger } from "./src/renderer";
import { MoveFinger } from "./src/systems"
import DonkeyKong from 'react-native-donkey-kong'

export default class BestGameEver extends PureComponent {
  constructor() {
    super();
  }

  render() {
    return (
      <DonkeyKong/>
    
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});

AppRegistry.registerComponent("BestGameEver", () => BestGameEver);