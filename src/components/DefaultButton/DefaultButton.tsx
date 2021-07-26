import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface Props {
  onPress: () => void;
  text: string;
}
export const DefaultButton = ({ onPress, text }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};
