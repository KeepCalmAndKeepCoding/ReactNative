import React, { Component } from 'react';
import { Provider } from 'react-redux';
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
  ProductList,
} from '@pages';

import appStore from './src/redux/store';

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={ appStore }>
        <Router>
          <Stack key="root" hideNavBar>

            <Scene key="login" component={Login} initial/>
            <Scene key="register" component={Register}/>
            <Scene key="productList" component={ProductList}/>

          </Stack>
        </Router>
      </Provider>
    );
  }
}
