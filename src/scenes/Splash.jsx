import React, { useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
} from 'react-native';

import useAction from '../hooks/useAction';
import * as appActions from '../actions/appActions';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Splash = () => {
  const initApp = useAction(appActions.initApp);

  useEffect(() => {
    setTimeout(() => {
      initApp();
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.root}>
      <Text>
        Splash screen
      </Text>
    </SafeAreaView>
  );
};

export default Splash;
