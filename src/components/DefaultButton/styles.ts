import { StyleSheet } from 'react-native';

import colors from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.darkShade,
    //borderColor: colors.mainOrange,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    height: 60,
    width: '80%',
  },
  primary: {
    //backgroundColor: colors.darkShade,
    //borderColor: colors.darkShade,
    backgroundColor: 'rgba( 245, 245, 245, 0.2)',
    borderColor: 'rgba( 245, 245, 245, 0.5)',
  },
  secondary: {
    backgroundColor: colors.lightShade,
    borderColor: colors.lightShade,
  },
  tertiary: {
    backgroundColor: colors.darkShade,
    borderColor: colors.darkShade,
  },
});

export const buttonTextColors = {
  primary: colors.lightShade,
  secondary: colors.darkShade,
  tertiary: colors.lightShade,
};

export default styles;
