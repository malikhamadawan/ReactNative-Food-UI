import React from 'react';
import {View,Image,Text,ImageBackground,TouchableOpacity,ScrollView} from 'react-native';
import {
    widthPercentageToDP as w,
    heightPercentageToDP as h,
  } from 'react-native-responsive-screen';
import styles from '../signUp/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Ionicons';
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
    // backgroundColor: 'red',
    // alignItems: 'center',
    // justifyContent: 'center',
}}
>
    <ScrollView
    horizontal={true}
    >
    <ImageBackground
    source={require('../../assets/image4.jpg')}
    imageStyle={{borderRadius: 20}}
    style={{
        height: '80%',
        width : 300,
        // backgroundColor: 'blue',
        marginHorizontal: 45,
        alignItems: 'center',
        justifyContent: 'flex-end',
        
    }}
    >
        <View
        style={{
            height: '55%',
            width: 275,
            backgroundColor: 'white',
            borderRadius: 15,
            elevation: 5,
            overflow :'hidden',
        }}
        >
<Text
style={{
    fontSize: 16,
    color: 'black',
    margin: 10,
}}
>Chinese Side</Text>
<View
style={{
    height: 25,
    width: '100%',
    // backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
}}
><View
style={{
    height: 25,
    width: '32%',
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

}}
>
<Icon name="star" color='yellow' size={15} ></Icon>

<Icon name="star" color='yellow' size={15} ></Icon>

<Icon name="star" color='yellow' size={15} ></Icon>
<Icon name="star" color='yellow' size={15} ></Icon>
<Icon name="star" color='yellow' size={15} ></Icon>
</View>

<Text
style={{
    marginLeft: 3,
    color: 'black'
}}
>4.5</Text>
<Text
style={{
    marginLeft: 10,
    color: 'black',
}}
>1287 comments</Text>
</View>
<View
style={{
    height: 36,
    width: '100%',
    backgroundColor: 'red',
    flexDirection:'row',
     justifyContent: 'space-evenly',
    alignItems: 'center',
}}
>
<Icon name="circle" color='yellow' size={15} ></Icon>
<Text
style={{
    color: 'black',
}}
>Normal</Text>
<Icon name="marker" color='yellow' size={15} ></Icon>
<Text
style={{
    color: 'black',
}}
>1.7km</Text>
<Icon name="" color='yellow' size={15} ></Icon>
<Text
style={{
    color: 'black',
}}
>32 min</Text>
</View>

        </View>
    </ImageBackground>


    <ImageBackground
    source={require('../../assets/image5.jpg')}
    imageStyle={{borderRadius: 25}}
    style={{
        height: '100%',
        width : 300,
        // backgroundColor: 'blue',
        marginHorizontal: 45,
        alignItems: 'center',
        justifyContent: 'center',
    }}
    >
    </ImageBackground>
    <ImageBackground
    source={require('../../assets/image6.jpg')}
    imageStyle={{borderRadius: 25}}
    style={{
        height: '100%',
        width : 300,
        // backgroundColor: 'blue',
        marginHorizontal: 45,
        alignItems: 'center',
        justifyContent: 'center',
    }}
    >
    </ImageBackground>
    </ScrollView>
</View>

          </View>
      );
  }