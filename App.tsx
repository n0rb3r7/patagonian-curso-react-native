/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState } from 'react';
import { Modal, StyleSheet, Text, Image, View } from 'react-native';
import DefaultButton from './src/components/DefaultButton';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from './src/utils/dimensions';
import colors from './src/utils/theme';

// const showAlert = () => {
//   Alert.alert('Hola!');
//   console.log('Device height -> ', DEVICE_HEIGHT);
//   console.log('Device width -> ', DEVICE_WIDTH);
// };

const App = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };
  const hideModal = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>vierne' sushiii</Text>
      <Text>subtitulo</Text>
      <Image
        style={styles.imagen}
        source={{ uri: 'https://www.pequerecetas.com/wp-content/uploads/2018/02/sushi-casero.jpg' }}
      />
      <DefaultButton onPress={showModal} text="Boton" />
      <Modal animationType="fade" visible={isModalVisible} transparent>
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.blueish,
              borderRadius: 17,
              width: '65%',
              height: 100,
            }}
          >
            <Text>Holas!</Text>
            <DefaultButton onPress={hideModal} text="ok" />
          </View>
        </View>
      </Modal>
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
    color: '#56fe',
    fontSize: 30,
  },
  imagen: {
    width: DEVICE_WIDTH * 0.5,
    height: DEVICE_HEIGHT * 0.5,
  },
});

export default App;
