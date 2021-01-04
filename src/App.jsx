import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import store from './store';
import RootStackNavigator from './navigators/RootStackNavigator';

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  </Provider>
);

export default App;
