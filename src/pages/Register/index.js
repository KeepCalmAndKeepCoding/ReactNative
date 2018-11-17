import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import Styles from './style';

// import {
//   LoginTitle,
//   FormGroup,
//   ButtonGroup,
// } from "@components";

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
      <TouchableOpacity style={ Styles.footer.container }>
        <Text style={ Styles.footer.text }>
          REGISTER ME
        </Text>
      </TouchableOpacity>
    );
  }

  _renderInput(placeholder, inputName, isPassword, index) {
    return (
      <TextInput
        key={ index }
        style={ Styles.main.form.input }
        placeholder={ placeholder }
        value={ this.state[inputName] }
        onChangeText={ (text) => this.handleChange(inputName, text) }
        placeholderTextColor={ "red" }
        autoCapitalize={ "none" }
        autoCorrect={ false }
        secureTextEntry={ isPassword }
        underlineColorAndroid={ "transparent" }
      />
    );
  }

  _renderFormGroups(forms = []) {
    const renderedForm = forms.map((form, index) => {
      return this._renderInput(form.placeholder, form.inputName, !!form.isPassword, index)
    })

    return (
        <View style={ Styles.main.form.groupContainer }>
          
          { renderedForm }          

        </View>
    );


          // { this._renderInput("FULL NAME", "fullname", false) }
          // { this._renderInput("USERNAME", "username", false) }
          // { this._renderInput("PASSWORD", "password", true) }
          // { this._renderInput("CONFIRM PASSWORD", "confirmPassword", true) }
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

  render() {
    return (
      <View style={ Styles.container }>
        <View style={ Styles.iosContainer }>

          { this._renderHeader() }

          <View style={ Styles.main.container }>
            
            { this._renderFormGroups([
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
            ]) }

            { this._renderTOC() }
          </View>

          { this._renderFooter() }

        </View>
      </View>
    );
  }
}
