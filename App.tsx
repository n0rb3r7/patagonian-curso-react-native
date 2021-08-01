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
import { Alert, Button, StyleSheet, Text, Image, View } from 'react-native';
import DefaultButton from './src/components/DefaultButton';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from './src/utils/dimensions';
import colors from './src/utils/theme';

const showAlert = () => {
  Alert.alert('Hola!');
  console.log('Device height -> ', DEVICE_HEIGHT);
  console.log('Device width -> ', DEVICE_WIDTH);
};

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Norbert APP</Text>
      <Text>subtitulo 1</Text>
      <Image
        style={styles.imagen}
        source={{ uri: 'https://www.pequerecetas.com/wp-content/uploads/2018/02/sushi-casero.jpg' }}
      />
      <Button title="Hola" onPress={showAlert} />
      <DefaultButton onPress={showAlert} text="Boton" />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.veryPinky,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
  },
  text: {
    color: 'white',
    fontSize: 30,
  },
  imagen: {
    width: DEVICE_WIDTH * 0.5,
    height: DEVICE_HEIGHT * 0.5,
  },
});

export default App;
