import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
} from 'react-native';

import Styles from './style';

export default class FormGroup extends Component<Props> {
  _renderInput(placeholder = "", isPassword = false, inputName, index) {
    return (
      <TextInput
        key={ index }
        style={ this.props.style }
        placeholder={ placeholder }
        placeholderTextColor={ this.props.placeholderTextColor }
        value={ this.props.values[inputName] }
        autoCapitalize={ "none" }
        autoCorrect={ false }
        secureTextEntry={ isPassword }
        underlineColorAndroid={ "transparent" }
        onChangeText={ (text) => this.props.onChangeText(inputName, text) }
      />
    );
  }

  _renderFormGroups() {
    const renderedForm = this.props.forms.map((form, index) => {
      return this._renderInput(form.placeholder, !!form.isPassword, form.inputName, index)
    });

    return (
        <View style={ Styles.groupContainer }>

          { renderedForm }

        </View>
    );
  }

  render() {
    return (
      <View style={ Styles.container }>

        { this._renderFormGroups() }

      </View>
    );
  }
}
