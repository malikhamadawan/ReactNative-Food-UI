import React,{useState} from 'react';
import {View,Text,Image,ImageBackground,TouchableOpacity} from 'react-native';
import styles from '../signUp/styles';
import {
    widthPercentageToDP as w,
    heightPercentageToDP as h,
  } from 'react-native-responsive-screen';
  import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Ionicons';
import Iconss from 'react-native-vector-icons/Entypo';
const Cart =({navigation})=>{
    const[text,setText]=useState(false)
    const [count,setcount]=useState(0)
    const setIcons=()=>{
 setText(!text)
     }
    return(
        <View style={styles.mainConatiner}
        >
            <View
            style={{
                height: h('45'),
                width : w('100'),
                backgroundColor :'red',
            }}
            >
<ImageBackground
source={require('../../assets/image4.jpg')}
style={{
    height : h('55'),
    width : w('100'),
}}
>
<View
style={{
    height : h('10'),
    width:w('100'),
    // backgroundColor: 'green',
    flexDirection :'row',
}}
>
    {/* View One */}
<TouchableOpacity
onPress={()=>{
    navigation.navigate('MyTabs')
}}
style={{
    height : h('10'),
    width : w('20'),
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent :'center',
}}
>
    <Icons name={'arrow-back-circle'} color={'white'} size={40} />
    </TouchableOpacity>

    {/* Spacer */}
    <View
    style={{
        height: h('10'),
        width: w('60'),
        // backgroundColor: 'orange',
    }}
    />

    {/* View two */}
<TouchableOpacity
style={{
    height : h('10'),
    width : w('20'),
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent :'center',
}}
>
    <Icon name={'local-grocery-store'} color={'white'} size={40} />
    </TouchableOpacity>
</View>
</ImageBackground>
            </View>
            <View
            style={{
                height: h('40'),
                width: w('100'),
                backgroundColor: 'white',
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,


            }}
            >
        <View
        style={{
            height: h('40'),
            width: w('100'),
            // backgroundColor: 'red',
        }}
        >
<Text
style={{
    fontSize: 25,
    color: 'black',
    margin: 10,
}}
>Chinese Side</Text>
<View
style={{
    height: h('5'),
    width: w('100'),
    // backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
}}
><View
style={{
    height: h('5'),
    width: w('25'),
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

}}
>
<Icon name="star" color={text?'green': 'grey'} size={15}
onPress={()=>{
    setIcons()
}}
>
</Icon>

<Icon name="star" color={text?'green': 'grey'} size={15}
onPress={()=>{
    setIcons()
}}
>
</Icon>

<Icon name="star" color={text?'green': 'grey'} size={15}
onPress={()=>{
    setIcons()
}}
>
</Icon>
<Icon name="star" color={text?'green': 'grey'} size={15}
onPress={()=>{
    setIcons()
}}
>
</Icon>
<Icon name="star" color={text?'green': 'grey'} size={15}
onPress={()=>{
    setIcons()
}}
>
</Icon>
</View>

<Text
style={{
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
    height: h('5'),
    width: w('100'),
    // backgroundColor: 'red',
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
}}
>
<View
style={{
    height: h('5'),
    width: w('27'),
    // backgroundColor: 'red',
    flexDirection :'row',
     justifyContent: 'center',
    alignItems:'center',
}}
>
<Icons name="ellipse-sharp" color='green' size={15} ></Icons>
<Text
style={{
    color: 'black',
}}
>Normal</Text>
</View>
<View
style={{
    height: h('5'),
    width: w('35'),
    // backgroundColor: 'orange',
    flexDirection :'row',
    justifyContent: 'center',
    alignItems: 'center',
}}
>
<Icons name="md-location" color='green' size={15} ></Icons>
<Text
style={{
    color: 'black',
}}
>1.7km</Text>
</View>
<View
style={{
    height: h('5'),
    width: w('30'),
    // backgroundColor: 'green',
    flexDirection :'row',
    alignItems: 'center',
    justifyContent: 'center',
}}
>
<Icons name="time" color='green' size={15} ></Icons>
<Text
style={{
    color: 'black',
}}
>32min</Text>
</View>
</View>
<Text
style={{
    color: 'black',
    fontSize : 20,
    marginLeft: 10,
}}
>Introduce</Text>
<Text
style={{
    color: 'grey',
    marginLeft :10,
    marginTop: 12,
}}
>Enjoy these flavors any time of day.</Text>
        </View>

            </View>
            <View
            style={{
                height: h('12'),
                width: w('100'),
                backgroundColor: 'grey',
                flexDirection :'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                borderTopLeftRadius: 25,
                borderTopRightRadius: 25,
                // elevation: 5,
            }}
            >
<View
style={{
height: h('7'),
width: w('38'),
backgroundColor: 'white',
elevation: 5,
borderRadius: 25,
overflow : 'hidden',
alignItems: 'center',
// justifyContent: 'center',
flexDirection: 'row',
}}
>
    {/* View One */}
<TouchableOpacity
onPress={()=>{setcount(count-1)}}
style={{
    height: h('100'),
    width: w('12'),
    //  backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
}}
>
<Iconss name={'minus'} color={'black'} size={20} />
</TouchableOpacity>

{/* view two */}
<View
style={{
    height: h('100'),
    width: w('12'),
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
}}
>
<Text
style={{
    color: 'black',
    fontSize: 16,
}}
>{count}</Text>
</View>

{/* View three */}
<TouchableOpacity
onPress={()=>{setcount(count+1)}}
style={{
    height: h('100'),
    width: w('12'),
    //  backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
}}
>
<Icons name={'add'} color={'black'} size={20} />
</TouchableOpacity>
</View>

{/* Add cart view */}
<TouchableOpacity
style={{
height: h('7'),
width: w('50'),
backgroundColor: 'green',
elevation: 5,
borderRadius: 25,
alignItems: 'center',
justifyContent: 'center',
overflow :'hidden',
}}
>
<Text
style={{
    fontSize :18,

}}
>$34.56 Add to cart</Text>
</TouchableOpacity>
            </View>
        </View>
    );
};
export default Cart