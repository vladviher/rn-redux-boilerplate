import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import routeNames from './routeNames';
import Splash from '../scenes/Splash';
import SignIn from '../scenes/SignIn';
import Home from '../scenes/Home';

import { appSelectors } from '../selectors';

const Stack = createStackNavigator();

export default () => {
  const isAppLoaded = useSelector(appSelectors.selectIsAppLoaded);
  const isSignedIn = useSelector(appSelectors.selectIsUserSigned);

  if (!isAppLoaded) {
    return <Splash />;
  }

  return (
    <Stack.Navigator>
      {isSignedIn ? (
        <Stack.Screen
          name={routeNames.Home}
          component={Home}
        />
      ) : (
        <Stack.Screen
          name={routeNames.SignIn}
          component={SignIn}
          options={{
            animationTypeForReplace: isSignedIn ? 'pop' : 'push',
          }}
        />
      )}
    </Stack.Navigator>
  );
};
