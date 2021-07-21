/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from './src/utils/dimensions';
console.log(DEVICE_HEIGHT);
console.log(DEVICE_WIDTH);
const App = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>vierne' sushi</Text>
      <Image
        style={styles.imagen}
        source={{ uri: 'https://www.pequerecetas.com/wp-content/uploads/2018/02/sushi-casero.jpg' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'pink',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
  },
  text: {
    color: '#56fe',
    fontSize: 30,
  },
  imagen: {
    width: DEVICE_WIDTH * 0.5,
    height: DEVICE_HEIGHT * 0.5,
  },
});

export default App;
