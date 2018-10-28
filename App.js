/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {

  _renderTitle() {
    return (
      <View style={ Styles.title.container }>
        <Text style={ Styles.title.text }>
          MY <Text style={ Styles.title.boldText }>MAPPY</Text>HOUR
        </Text>
      </View>
    )
  }

  _renderInput(placeholder = "", isPassword = false) {
    return (
      <TextInput
        style={ Styles.forms.input }
        placeholder={ placeholder }
        autoCapitalize={ "none" }
        autoCorrect={ false }
        secureTextEntry={ isPassword }
        underlineColorAndroid={ "transparent" }
      />
    );
  }

  _renderForms() {
    return (
      <View style={ Styles.forms.container }>

        { this._renderInput("USERNAME") }
        
        { this._renderInput("PASSWORD", true) }

      </View>
    )
  }

  _renderButtonOne(title, type = "general", onPress) {
    const containerStyles = [Styles.buttons.innerContainer];

    if (type === "block") {
      containerStyles.push(Styles.buttons.block.container);
    } else {
      containerStyles.push(Styles.buttons.general.container);
    }

    return (
      <TouchableOpacity
        style={ containerStyles }
        onPress={ () => onPress() }
      >
        <Text style={ Styles.buttons[type].text }>{ title }</Text>
      </TouchableOpacity>
    );
  }

  _renderButtons() {
    return (
      <View style={ Styles.buttons.container }>

        { this._renderButtonOne("SIGN IN", "block", () => alert("button 1")) }

        { this._renderButtonOne("VIA FACEBOOK", "general", () => alert("another button")) }

      </View>
    );
  }
  
  render() {
    return (
      <View style={ Styles.container }>

        {/* =================== Title section ===================== */}
        { this._renderTitle() }

        {/* =================== Forms section ===================== */}
        { this._renderForms() }

        {/* =================== Buttons section ===================== */}
        { this._renderButtons() }
        
        
      </View>
    );
  }
}

const Styles = {
  container: {
    flex: 1,
    backgroundColor: "red",
  },

  title: {
    container: {
      height: 250,
      flex: -1,
      justifyContent: "center",
      alignItems: "center",
    },

    text: {
      color: "white",
      fontSize: 30,
    },

    boldText: {
      fontWeight: "bold",
    },
  },

  forms: {
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },

    input: {
      borderWidth: 1,
      borderColor: "white",
      width: 270,
      height: 45,
      color: "white",
      paddingHorizontal: 20,
      marginVertical: 10,
      textAlign: "center",
    },
  },

  buttons: {
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },

    innerContainer: {
      width: 270,
      height: 45,
      paddingHorizontal: 20,
      marginVertical: 10,
      justifyContent: "center",
      alignItems: "center",
    },

    general: {
      container: {
        borderWidth: 1,
        borderColor: "white",
        backgroundColor: "red",
      },

      text: {
        color: "white",
      },
    },


    block: {
      container: {
        backgroundColor: "white"
      },

      text: {
        color: "red",
      },
    },
  },
}
