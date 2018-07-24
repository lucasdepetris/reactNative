// App.js

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Settings from './screens/Settings';
import Home from './screens/Home';

const AppNavigator = createStackNavigator({
  HomeScreen: { screen: Home },
  SettingScreen: { screen: Settings }
});

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}
