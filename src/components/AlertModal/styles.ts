import { StyleSheet } from 'react-native';
import colors from '../../utils/theme';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  innerAlert: {
    alignItems: 'center',
    backgroundColor: colors.darkAccent,
    borderRadius: 13,
    justifyContent: 'center',
    paddingBottom: 20,
    paddingTop: 10,
    width: '65%',
  },
  button: {
    height: 40,
  },
  textContainer: {
    marginVertical: 20,
  },
  textColor: {
    color: colors.black,
  },
});

export default styles;
