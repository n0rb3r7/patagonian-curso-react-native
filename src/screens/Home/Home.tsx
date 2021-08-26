import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, View } from 'react-native';

import { DefaultButton, Separator, Typography } from '../../components';

import styles from './styles';
import { getAllBooks } from '../../services';
import { goToScreen } from '../../navigation/controls';

const goToExperimentalScreen = () => {
  goToScreen('Experimental');
};

const HomeScreen = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const dis = async () => {
      try {
        const { success, data } = await getAllBooks();
        if (success) {
          setBooks(data);
        } else {
          Alert.alert('Error getting books on Home Screen');
        }
      } catch (error) {
        console.log('Error getting books on Home Screen', error);
        Alert.alert('Error getting books on Home Screen');
      }
    };
    dis();
  }, []);
  console.log('Inside HomeScreen');
  return (
    <ScrollView style={{ flex: 1, width: '100%' }}>
      <Separator size={50} />
      <View style={styles.mainContainer}>
        <Typography size={20}>Home Screen</Typography>
        <Separator size={10} />
        <DefaultButton
          text="Go To Experimental Screen"
          onPress={goToExperimentalScreen}
          variant="tertiary"
        />
        <Typography>{JSON.stringify(books, null, 2)}</Typography>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
