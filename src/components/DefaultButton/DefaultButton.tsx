import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import colors from '../../utils/theme';

interface Props {
  onPress: () => void;
  text: string;
}
export const DefaultButton = ({ onPress, text }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        marginVertical: 10,
        backgroundColor: colors.veryPinky,
        borderRadius: 10,
        width: 150,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};
