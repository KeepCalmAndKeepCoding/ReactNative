import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import Styles from './style';

import {
  FormGroup,
} from "@components";

export default class Register extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      fullname: '',
      username: props.navData.username,
      password: '',
      confirmPassword: '',
    }
  }

  handleChange(inputName, text) {
    let state = this.state;

    state[inputName] = text;

    this.setState(state);
  }

  _renderHeader() {
    return (
      <View style={ Styles.header.container }>
        <TouchableOpacity onPress={ () => Actions.pop() } style={ Styles.header.backButton.container }>
          <Text style={ Styles.header.backButton.content }>
            { "<" }
          </Text>
        </TouchableOpacity>

        <Text style={ Styles.header.title.main }>
          My <Text style={ Styles.header.title.bold }>Mappy</Text>Hour
        </Text>
      </View>
    );
  }

  _renderFooter() {
    return (
      <TouchableOpacity style={ Styles.footer.container } onPress={ Actions.productList }>
        <Text style={ Styles.footer.text }>
          REGISTER ME
        </Text>
      </TouchableOpacity>
    );
  }

  _renderTOC() {
    return (
      <View style={ Styles.main.toc.container }>

        <Text style={{}}>
          By registering to this application
        </Text>
        <Text style={{}}>
          I hereby aggree to the <Text style={ Styles.main.toc.blue }>Terms and Conditions</Text>
        </Text>

      </View>
    );
  }

  renderFormGroup() {
    return (
      <View style={ Styles.main.form.groupContainer }>
        <FormGroup
          style={ Styles.main.form.input }
          values={ this.state }
          onChangeText={ (inputName, text) => this.handleChange(inputName, text) }
          placeholderTextColor={ "red" }
          forms={[
            {
              placeholder: "FULL NAME",
              inputName: "fullname",
              isPassword: false,
            },
            {
              placeholder: "USERNAME",
              inputName: "username",
              isPassword: false,
            },
            {
              placeholder: "PASSWORD",
              inputName: "password",
              isPassword: true,
            },
            {
              placeholder: "CONFIRM PASSWORD",
              inputName: "confirmPassword",
              isPassword: true,
            },
            {
              placeholder: "NAMA",
              inputName: "nama",
              isPassword: true,
            },
          ]}
        />
      </View>
    )
  }

  renderForm() {
    return null;
  };

  render() {
    return (
      <View style={ Styles.container }>
        <View style={ Styles.iosContainer }>

          { this._renderHeader() }

          <View style={ Styles.main.container }>

            { /* this.renderFormGroup() */ }

            { this.renderForm() }

            { this._renderTOC() }
          </View>

          { this._renderFooter() }

        </View>
      </View>
    );
  }
}
