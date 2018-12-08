import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';

import Styles from './style';

import {
  LoginTitle,
  FormGroup,
  ButtonGroup,
  Input,
} from "@components";

export default class Login extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    }
  }

  render() {
    return (
      <View style={ Styles.container }>

        {/* =================== Title section ===================== */}
        <LoginTitle />

        {/* =================== Forms section ===================== */}
        <Input
          placeholder={ "USERNAME" }
          placeholderTextColor={ "yellow" }
          value={ this.state.username }
          onChangeText={ (username) => this.setState({username}) }
        />
        <Input
          placeholder={ "PASSWORD" }
          placeholderTextColor={ "yellow" }
          value={ this.state.password }
          secureTextEntry
          onChangeText={ (password) => this.setState({password}) }
        />

        {/* =================== Buttons section ===================== */}
        <ButtonGroup username={ this.state.username }  data={ this.state } />

      </View>
    );
  }
}
