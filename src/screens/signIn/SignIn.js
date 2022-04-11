import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../signUp/styles';
const SignIn = ({navigation}) => {
  const [text, setText] = useState();
  return (
    <View style={styles.mainConatiner}>
      <ScrollView>
        <View style={styles.container2}>
          <Image
            source={require('../../assets/images.png')}
            resizeMode={'contain'}
            style={{
              height: 200,
              width: 200,
            }}
          />
        </View>
        <View
          style={{
            height: h('15'),
            // backgroundColor: 'blue',
          }}>
          <Text
            style={{
              fontSize: 60,
              color: 'black',
              marginLeft: 10,
            }}>
            Hello
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              marginLeft: 10,
            }}>
            Sign into your account
          </Text>
        </View>
        <View
          style={{
            height: h('30'),
            // backgroundColor: 'orange',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={styles.container3}>
            <View
              style={{
                height: '100%',
                width: w('20'),
                // backgroundColor: 'blue',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="ios-call" color="black" size={20}></Icon>
            </View>
            <TextInput
              onChangeText={newText => setText(newText)}
              defaultValue={text}
              placeholder="Phone"
              placeholderTextColor={'#C4B5B5'}
              color={'black'}
              keyboardType={'phone-pad'}
            />
          </View>

          <View
            style={{
              height: 50,
              width: w('90'),
              backgroundColor: 'white',
              borderRadius: 25,
              flexDirection: 'row',
              //   marginBottom: 10,
              overflow: 'hidden',
              elevation: 5,
            }}>
            <View
              style={{
                height: '100%',
                width: w('20'),
                // backgroundColor: 'blue',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="lock-closed" color="black" size={20}></Icon>
            </View>
            <TextInput
              placeholder="Password"
              placeholderTextColor={'#C4B5B5'}
              color={'black'}
              secureTextEntry={true}
            />
          </View>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              marginLeft: 190,
              marginTop: 10,
            }}>
            Sign into your account
          </Text>
        </View>
        <View
          style={{
            height: h('10'),
            // backgroundColor: 'blue',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUp');
            }}
            style={{
              height: 40,
              width: '40%',
              backgroundColor: 'orange',
              borderRadius: 25,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                color: '#F8F8F8',
              }}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: h('12'),
            // backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
            }}>
            Don't have an account?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            <Text
              style={{
                fontSize: 16,
                color: 'black',
                fontWeight: 'bold',
              }}>
              Create
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default SignIn;
