import React, { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import useAction from '../hooks/useAction';
import * as appActions from '../actions/appActions';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

const Home = () => {
  const getCatById = useAction(appActions.getCatById);

  useEffect(() => {
    getCatById('MjAzMDMwMg');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.root}>
      <Text>
        Home screen
      </Text>
    </View>
  );
};

export default Home;
