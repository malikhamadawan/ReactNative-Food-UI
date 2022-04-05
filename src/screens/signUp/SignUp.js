import React from 'react';
import {View,StyleSheet,ScrollView, Image, Text, TextInput,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import styles  from './styles';
const SignUp =()=> {
  
    return (
      <View style={styles.mainConatiner}>
        <ScrollView>
        <View
          style={styles.container}>
          <Image
            source={require('../../assets/images.png')}
            resizeMode="contain"
            style={{
                height: 200,
                width: 200,
            }}
          />
        </View>
        <View
          style={{
            height: h('36'),
          // backgroundColor: 'green',
            alignItems: 'center',
            justifyContent :'center',
          }}>
          <View
            style={{
              height: 50,
              width: w('90'),
              backgroundColor: 'white',
              borderColor: 'black',
              borderRadius: 25,
              flexDirection: 'row',
              marginBottom: 10,
              overflow:"hidden",
              elevation: 5,
            }}>
            <View
              style={{
                height: '100%',
                width: w('20'),
                // backgroundColor: 'blue',
                justifyContent:'center',
                alignItems:"center"
              }}>
                 <Icon name="mail" color='black' size={20} >
  </Icon>
            </View>
            <TextInput
            placeholder='Email address'
            placeholderTextColor={'#C4B5B5'}
            />
          </View>

          <View
            style={{
              height: 50,
              width: w('90'),
            backgroundColor: 'white',
              borderRadius: 25,
              borderColor: 'black',
              flexDirection: 'row',
              marginBottom: 10,
              overflow :'hidden',
              elevation: 5,
            }}>
            <View
              style={{
                height: '100%',
                width: w('20'),
                // backgroundColor: 'blue',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                                 <Icon name="lock-closed" color='black' size={20} >
  </Icon>
            </View>
            <TextInput
            placeholder='Password'
            placeholderTextColor={'#C4B5B5'}
            secureTextEntry={true}
            />
          </View>

          <View
            style={{
              height: 50,
              width: w('90'),
            backgroundColor: 'white',
              borderRadius: 25,
              borderColor: 'black',
              flexDirection: 'row',
              marginBottom: 10,
              overflow :'hidden',
              elevation: 5,
            }}>
            <View
              style={{
                height: '100%',
                width: w('20'),
                // backgroundColor: 'blue',
                alignItems: 'center',
                justifyContent :'center',
              }}>
                <Icon name="ios-call" color='black' size={20} >
  </Icon>
            </View>
            <TextInput
            placeholder='Phone'
            placeholderTextColor={'#C4B5B5'}
            keyboardType={'phone-pad'}
            />
          </View>

          <View
            style={{
              height: 50,
              width: w('90'),
              backgroundColor: 'white',
              borderRadius: 25,
              borderColor: 'black',
              flexDirection: 'row',
              overflow :'hidden',
              elevation: 5,
            }}>
            <View
              style={{
                height: '100%',
                width: w('20'),
                //backgroundColor: 'blue',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Icon name="person" color='black' size={20} >
  </Icon>
            </View>
            <TextInput
            placeholder='Name'
            placeholderTextColor={'#C4B5B5'}
            />
          </View>

        </View>
        {/* <View
        style={{
            height: h('5'),
            backgroundColor :'red',
        }}
        /> */}
<View
style={{
    height: h('18'),
    // backgroundColor: 'blue',
    alignItems:'center',
    justifyContent:'center',
}}
>
<TouchableOpacity
style={{
    height: 40,
    width: '40%',
    backgroundColor: 'orange',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
}}
>
<Text
style={{
    fontSize: 20,
    color: '#F8F8F8',
}}
>SignUp</Text>
</TouchableOpacity>
<Text
style={{
    fontSize: 16,
    color: 'black',
}}
>Have an account?</Text>
</View>
<View
style={{
    height: h('11'),
    //  backgroundColor :'purple',
    alignItems: 'center',
    justifyContent: 'center',
}}
>
<Text
style={{
    fontSize: 14,
    color: 'black',
}}
>Sign up using one of the following methods</Text>
<View
style={{
    height: '50%',
    width: '50%',
  // backgroundColor:'red',
  alignItems: 'center',
  justifyContent: 'space-evenly',
    flexDirection: 'row',
}}
>
<Icon name="logo-google" color='red' size={30} >
  </Icon>
  <Icon name="ios-logo-twitter" color='skyblue' size={30} >
  </Icon>
  <Icon name="logo-facebook" color='blue' size={30} >
  </Icon>
</View>
</View>
      
      
</ScrollView></View>
    );
  
}

export default SignUp;