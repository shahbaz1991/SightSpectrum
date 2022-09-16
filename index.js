/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './app/SightSpectrum/redux/reducer';

const initStore = () => createStore( reducer );
const store = initStore();

const RNApp = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

AppRegistry.registerComponent(appName, () => RNApp);
