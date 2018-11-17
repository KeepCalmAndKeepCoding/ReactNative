import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import {
  Router,
  Scene,
  Stack,
} from 'react-native-router-flux';

import {
  Login,
  Register,
} from '@pages';

export default class App extends Component<Props> {
  render() {
    return (
      <Router>
        <Stack key="root" hideNavBar>

          <Scene key="login" component={Login} initial/>
          <Scene key="register" component={Register}/>

        </Stack>
      </Router>
    );
  }
}
