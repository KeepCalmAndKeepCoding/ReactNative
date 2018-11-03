import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import Styles from './style';

export default class LoginTitle extends Component<Props> {
  render() {
    return (
      <View style={ Styles.container }>
        <Text style={ Styles.text }>
          MY <Text style={ Styles.boldText }>HAPPY</Text>HOUR
        </Text>
      </View>
    );
  }
}
