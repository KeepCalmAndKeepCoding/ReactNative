import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import Styles from './style';

export default class ButtonGroup extends Component<Props> {
  handleSignIn() {
    // this.props.login(this.state);
    // alert(JSON.stringify(this.props.data));
  }

  handleRegister() {
    Actions.register({
      navData: {
        username: this.props.username
      },
    });
  }

  _renderButtonOne(title, type = "general", onPress) {
    const containerStyles = [Styles.innerContainer];

    if (type === "block") {
      containerStyles.push(Styles.block.container);
    } else {
      containerStyles.push(Styles.general.container);
    }

    return (
      <TouchableOpacity
        style={ containerStyles }
        onPress={ () => onPress() }
      >
        <Text style={ Styles[type].text }>{ title }</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={ Styles.container }>

        { this._renderButtonOne("SIGN IN", "block", () => this.handleSignIn()) }

        { this._renderButtonOne("REGISTER", "general", () => this.handleRegister()) }

      </View>
    );
  }
}
