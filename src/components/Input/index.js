import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';

import Styles from './style';

export default class Input extends Component<Props> {
  render() {
    return (
      <TextInput
        style={ [Styles.input, this.props.style] }
        placeholder={ this.props.placeholder }
        placeholderTextColor={ this.props.placeholderTextColor }
        value={ this.props.value }
        autoCapitalize={ "none" }
        autoCorrect={ false }
        secureTextEntry={ this.props.secureTextEntry }
        underlineColorAndroid={ "transparent" }
        onChangeText={ this.props.onChangeText }
      />
    );
  }
}
