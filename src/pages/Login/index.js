import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
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
      <ScrollView
        style={ Styles.container }
        keyboardShouldPersistTaps={ 'handled' }
      >

        {/* =================== Title section ===================== */}
        <LoginTitle />

        {/* =================== Forms section ===================== */}
        <View style={ Styles.inputContainer }>
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
        </View>

        {/* =================== Buttons section ===================== */}
        <ButtonGroup username={ this.state.username }  data={ this.state } />

      </ScrollView>
    );
  }
}
