import React from 'react';
import { ImageBackground, StatusBar, View } from 'react-native';

import { DefaultButton, Separator, Typography } from '../../components';
import styles from './styles';
import colors from '../../utils/theme';

import { goToScreen, replaceRoute } from '../../navigation/controls';

const goToMainTabs = () => {
  replaceRoute('TabNavigator');
};

const goToExperimentalScreen = () => {
  goToScreen('Experimental');
};

const WelcomeScreen = () => {
  return (
    <ImageBackground
      blurRadius={60}
      style={styles.mainContainer}
      source={{
        uri: 'https://images.pexels.com/photos/1693095/pexels-photo-1693095.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      }}
    >
      <StatusBar backgroundColor={colors.darkShade} barStyle="light-content" />
      <View style={styles.mainContainer}>
        <Typography color={colors.lightShade} size={20} variant="medium">
          Welcome Screen
        </Typography>
        <Separator size={30} />
        <DefaultButton text="Go To Tabs" textSize={16} onPress={goToMainTabs} />
        <Separator size={20} />
        <DefaultButton
          text="Go To Experimental Screen"
          textSize={16}
          onPress={goToExperimentalScreen}
          variant="secondary"
        />
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;
