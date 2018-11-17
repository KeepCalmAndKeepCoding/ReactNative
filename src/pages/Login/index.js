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
} from "@components";

export default class Login extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    }
  }

  handleChange(inputName, text) {
    let state = this.state;

    state[inputName] = text;

    this.setState(state);
  }

  render() {
    return (
      <View style={ Styles.container }>

        {/* =================== Title section ===================== */}
        <LoginTitle />

        {/* =================== Forms section ===================== */}
        <FormGroup onChangeText={ (inputName, text) => this.handleChange(inputName, text) } />

        {/* =================== Buttons section ===================== */}
        <ButtonGroup username={ this.state.username }  data={ this.state } />

      </View>
    );
  }
}
