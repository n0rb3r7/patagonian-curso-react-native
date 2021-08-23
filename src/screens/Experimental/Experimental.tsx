import React, { useState } from 'react';
import { Image, ImageBackground, SafeAreaView, ScrollView, View } from 'react-native';

import { AlertModal, DefaultButton, Separator, Typography } from '../../components';
import styles from './styles';

import colors from '../../utils/theme';

const arr = Array.from({ length: 3 }, (_, index) => index);
// arr = [0, 1, 2, 3, 4, 5]

const ExperimentalScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <SafeAreaView style={styles.safeArea} />
      <ImageBackground
        blurRadius={80}
        style={styles.mainContainer}
        source={{
          uri: 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        }}
      >
        <ScrollView style={styles.scrollView}>
          <View style={styles.mainContainer}>
            <Separator size={30} />

            <Typography color={colors.lightShade} size={30} variant="bold">
              Título
            </Typography>
            <Typography color={colors.darkShade} variant="medium">
              Subtitulo
            </Typography>
            <Separator size={10} />
            {arr.map((item) => (
              <View key={`image-${item}`}>
                <Image
                  resizeMode="contain"
                  source={{
                    uri: 'https://cdn.dribbble.com/users/361323/screenshots/4180125/crypto-currently-template.png?compress=1&resize=400x300',
                  }}
                  style={styles.image}
                />
                <Separator size={10} />
              </View>
            ))}
            <View style={styles.horizontalContainer}>
              <Image
                resizeMode="contain"
                source={{
                  uri: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/30fa2843-b981-4e76-9050-4fc9e886377d/daadbyt-8648c6e2-d67f-4163-93ea-1fbf9ce65cdf.png/v1/fill/w_1280,h_1639,q_80,strp/tulp_by_n0rb3rt_daadbyt-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYzOSIsInBhdGgiOiJcL2ZcLzMwZmEyODQzLWI5ODEtNGU3Ni05MDUwLTRmYzllODg2Mzc3ZFwvZGFhZGJ5dC04NjQ4YzZlMi1kNjdmLTQxNjMtOTNlYS0xZmJmOWNlNjVjZGYucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.s1vUvW9WEbKcWBqY3VgGxQvh24lox0t3XYG94ThUs-M',
                }}
                style={styles.image}
              />
              <Separator isHorizontal size={10} />
              <Image
                resizeMode="contain"
                source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                style={styles.image}
              />
            </View>
            <Separator size={10} />
            <DefaultButton onPress={showModal} text="Mostrar Hola Mundo" variant="primary" />
            <AlertModal
              message="¡Hola Mundo!"
              onPressPrimaryButton={hideModal}
              primaryButtonText="Ok"
              onPressSecondaryButton={hideModal}
              secondaryButtonText="Cancel"
              visible={isModalVisible}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
};

export default ExperimentalScreen;
