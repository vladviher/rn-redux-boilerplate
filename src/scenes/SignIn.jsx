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

const SignIn = () => (
  <View style={styles.root}>
    <Text>
      SignIn screen
    </Text>
  </View>
);

export default SignIn;
