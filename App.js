import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import {
  Login,
  Register,
} from '@pages';

export default class App extends Component<Props> {
  render() {
    return (
      <View style={ {flex: 1} }>

        <Register/>

      </View>
    );
  }
}
