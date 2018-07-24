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
import Profile from './screens/Profile'

const AppNavigator = createStackNavigator({
  HomeScreen: { screen: Home },
  SettingScreen: { screen: Settings },
  ProfileScreen: {screen: Profile}
});

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}
