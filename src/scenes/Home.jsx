import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

const Home = () => (
  <View style={styles.root}>
    <Text>
      Home screen
    </Text>
  </View>
);

export default Home;
