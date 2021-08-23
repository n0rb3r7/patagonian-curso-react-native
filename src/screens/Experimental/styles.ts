import { StyleSheet } from 'react-native';

import { DEVICE_WIDTH } from '../../utils/dimensions';
import colors from '../../utils/theme';

const styles = StyleSheet.create({
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  image: {
    aspectRatio: 1,
    minHeight: 50,
    width: DEVICE_WIDTH * 0.3,
  },
  mainContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 30,
    width: '100%',
  },
  safeArea: {
    backgroundColor: colors.darkShade,
  },
  scrollView: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
});

export default styles;
