import React from 'react';
import {StyleSheet} from 'react-native';

import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    height: h('35'),
    width: w('100'),
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flex: 1,
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    height: h('30'),
    //   backgroundColor:'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container3: {
    height: 50,
    width: w('90'),
    backgroundColor: 'white',
    // borderWidth: 1,
    borderColor: 'black',
    borderRadius: 25,
    flexDirection: 'row',
    marginBottom: 14,
    overflow: 'hidden',
    elevation: 5,
  },
});
export default styles;
