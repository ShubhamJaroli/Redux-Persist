import { AppRegistry } from 'react-native';
import React from 'react';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';

import {store,persistor} from './app/configureStore';

const stores = store
const RNRedux = () => (
  <Provider store = { stores }>
    <App />
  </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);