import React from 'react';
import { View } from 'react-native';

import { DefaultButton, Separator, Typography } from '../../components';

import styles from './styles';

import { goToScreen } from '../../navigation/controls';

const goToExperimentalScreen = () => {
  goToScreen('Experimental');
};

const HomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Typography size={20}>Home Screen</Typography>
      <Separator size={10} />
      <DefaultButton
        text="Go To Experimental Screen"
        onPress={goToExperimentalScreen}
        variant="tertiary"
      />
    </View>
  );
};

export default HomeScreen;
