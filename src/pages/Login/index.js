import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

import Styles from './style';
import {
  userActions,
} from '@actions';

import {
  LoginTitle,
  FormGroup,
  ButtonGroup,
  Input,
} from "@components";

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ubahUserName: (data) => dispatch(userActions.ubahUserName(data)),
    ubahUserNameDariApi: () => dispatch(userActions.ubahUserNameDariApi()),
  };
};

class Login extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  };

  componentDidMount() {
    // this.props.ubahUserNameDariApi();
  };

  render() {
    return (
      <ScrollView
        style={ Styles.container }
        keyboardShouldPersistTaps={ 'handled' }
      >

        {/* =================== Title section ===================== */}
        <LoginTitle />

        {/* =================== Forms section ===================== */}
        <View style={{backgroundColor: 'white'}}>

          <Text style={{fontSize: 20}}>Ini dari reducer user:{ this.props.user.username }</Text>

          <TouchableOpacity
            style={{backgroundColor: 'pink', padding: 20}}
            onPress={ () => this.props.ubahUserName(this.state.username) }
          >
            <Text>Change</Text>
          </TouchableOpacity>

        </View>

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

export default connect(mapStateToProps, mapDispatchToProps) (Login)
