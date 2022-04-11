import React from 'react';
import { View, Dimensions, Image, ImageBackground } from 'react-native';
import styles from '../signUp/styles';
const { height, width } = Dimensions.get('window');
const Dummy1 = () => {
  return (
    <View style={styles.mainConatiner}>
      <View
        style={{
          height: (height/100)*40,
          width: width,
          backgroundColor: 'red',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ImageBackground
          source={require('../../assets/images.png')}
          style={{
            height: 300,
            width: 300,
          }}></ImageBackground>
      </View>
    </View>
  );
};
export default Dummy1;
