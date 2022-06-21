import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './components/AppNavigator';

const AppContainer = createAppContainer(AppNavigator);

export default class AppX extends Component {
  render() {
    return <AppContainer />;
  }
}
