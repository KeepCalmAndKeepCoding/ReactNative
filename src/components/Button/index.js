import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import Styles from './style';

export default class Button extends Component<Props> {
  render() {
    const containerStyles = [Styles.innerContainer];

    if (this.props.type === "block") {
      containerStyles.push(Styles.block.container);
    } else {
      containerStyles.push(Styles.general.container);
    };

    return (
      <TouchableOpacity
        style={ containerStyles }
        onPress={ () => this.props.onPress() }
      >
        <Text style={ Styles[type].text }>{ this.props.title }</Text>
      </TouchableOpacity>
    );
  }
}
