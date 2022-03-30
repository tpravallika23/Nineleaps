/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import configureStore from './src/store/ConfigureStore';
import {Provider} from 'react-redux';
import LoginPage from './src/LoginPage';

const App = () => {
  return (
    <Provider store={configureStore}>
      <LoginPage />
    </Provider>
  );
};

export default App;
