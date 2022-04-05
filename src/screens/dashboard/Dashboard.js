import React from 'react';
import {View,Image,Text,Imagebackground,TouchableOpacity,ScrollView} from 'react-native';
import {
    widthPercentageToDP as w,
    heightPercentageToDP as h,
  } from 'react-native-responsive-screen';
import styles from '../signUp/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Ionicons';
import _possibleConstructorReturn from '@babel/runtime/helpers/possibleConstructorReturn';
import ScrollViewCommands from 'react-native/Libraries/Components/ScrollView/ScrollViewCommands';
  export const Dashboard=()=>{
      return(
          <View  style={styles.mainConatiner}>
<View
style={{
    height: h('10'),
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',

}}
>
<View
style={{
    height: h('10'),
    width : w('80'),
    // backgroundColor :'orange',
    flexDirection: 'column',
}}
>
<View
style={{
    height: h('5'),
    width : w('80'),
    // backgroundColor: 'blue',
}}
>
<Text
style={{
    fontSize: 18,
    marginTop: 10,
    marginLeft: 10,
    color :'green',
}}
>Pakistan</Text>
</View>
<View
style={{
    height: h('5'),
    width: w('80'),
    // backgroundColor: 'green',
    flexDirection :'row',
}}
>
<Text
style={{
fontSize: 16,
color: 'grey',
    marginLeft: 17,

}}
>
India
</Text>
<TouchableOpacity
style={{
    marginTop: 3,
}}
>
<Icon name="keyboard-arrow-down" color='black' size={20} >
  </Icon>
  </TouchableOpacity>
</View>
</View>
<View
style={{
    height: h('7'),
    width: w('14'),
    backgroundColor: 'yellow',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
}}
>
<Icons name="search-outline" color='black' size={24} >
  </Icons>
</View>
</View>

<View
style={{
    height: h('30'),
    backgroundColor: 'red',
}}
>
<ScrollView
horizontal={false}
>
    <Image
    source={require('../../assets/images.png')}
    />
    <Image
    source={require('../../assets/images.png')}
    />
    <Image
    source={require('../../assets/images.png')}
    />
</ScrollView>
</View>

          </View>
      );
  }