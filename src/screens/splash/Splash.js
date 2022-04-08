import React,{useEffect} from 'react';
import {View,Text,Image} from 'react-native';
import {
    widthPercentageToDP as w,
    heightPercentageToDP as h,
  } from 'react-native-responsive-screen';
import styles from '../signUp/styles';
export const Splash=({navigation})=>{
useEffect(()=>{
    setTimeout(() => {
    navigation.replace('SignIn')
    }, 1000);
})
    return(
        <View style={styles.container1}>
<Image
source={require('../../assets/images.png')}
style={{
    height: 300,
    width: 300,
}}
/>
<Text
style={{
    fontSize: 34,
    color: 'black',
    fontFamily: 'Cafe Matcha',
}}>
    The Best Food
</Text>
        </View>
    );
}