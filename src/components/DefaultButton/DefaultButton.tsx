import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

interface Props {
  onPress: () => void;
  text: string;
}
export const DefaultButton = ({ onPress, text }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.mainContainer.backgroundColor}>{text}</Text>
    </TouchableOpacity>
  );
};
