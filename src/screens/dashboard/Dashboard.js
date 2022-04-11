import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import styles from '../signUp/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Ionicons';
export const Dashboard = ({navigation}) => {
  const [text, setText] = useState(false);
  const setIcons = () => {
    setText(!text);
  };
  return (
    <View style={styles.mainConatiner}>
      <View
        style={{
          height: h('10'),
          // backgroundColor: 'red',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            height: h('10'),
            width: w('80'),
            // backgroundColor :'orange',
          }}>
          <View
            style={{
              height: h('5'),
              width: w('80'),
              // backgroundColor: 'blue',
            }}>
            <Text
              style={{
                fontSize: 18,
                marginTop: 10,
                marginLeft: 10,
                color: 'green',
              }}>
              Pakistan
            </Text>
          </View>
          <View
            style={{
              height: h('5'),
              width: w('80'),
              // backgroundColor: 'green',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontSize: 16,
                color: 'grey',
                marginLeft: 17,
              }}>
              India
            </Text>
            <TouchableOpacity
              style={{
                marginTop: 3,
              }}>
              <Icon name="keyboard-arrow-down" color="black" size={20}></Icon>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={{
            height: h('7'),
            width: w('14'),
            backgroundColor: 'yellow',
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 5,
          }}>
          <Icons name="search-outline" color="grey" size={24}></Icons>
        </TouchableOpacity>
      </View>
      {/* Imagebackground view */}
      <View
        style={{
          height: h('35'),
          //  backgroundColor: 'red',
        }}>
        <ScrollView horizontal={true}>
          {/* ImageBackground1 */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Cart');
            }}>
            <ImageBackground
              source={require('../../assets/image4.jpg')}
              imageStyle={{borderRadius: 20}}
              style={{
                height: '85%',
                width: 300,
                // backgroundColor: 'blue',
                marginHorizontal: 45,
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <View
                style={{
                  height: '55%',
                  width: 275,
                  backgroundColor: 'white',
                  borderRadius: 15,
                  elevation: 5,
                  overflow: 'hidden',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: 'black',
                    margin: 10,
                  }}>
                  Chinese Side
                </Text>
                <View
                  style={{
                    height: 25,
                    width: '100%',
                    // backgroundColor: 'green',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      height: 25,
                      width: '32%',
                      // backgroundColor: 'red',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Icon
                      name="star"
                      color={text ? 'green' : 'grey'}
                      size={15}
                      onPress={() => {
                        setIcons();
                      }}></Icon>

                    <Icon
                      name="star"
                      color={text ? 'green' : 'grey'}
                      size={15}
                      onPress={() => {
                        setIcons();
                      }}></Icon>

                    <Icon
                      name="star"
                      color={text ? 'green' : 'grey'}
                      size={15}
                      onPress={() => {
                        setIcons();
                      }}></Icon>
                    <Icon
                      name="star"
                      color={text ? 'green' : 'grey'}
                      size={15}
                      onPress={() => {
                        setIcons();
                      }}></Icon>
                    <Icon
                      name="star"
                      color={text ? 'green' : 'grey'}
                      size={15}
                      onPress={() => {
                        setIcons();
                      }}></Icon>
                  </View>

                  <Text
                    style={{
                      marginLeft: 3,
                      color: 'black',
                    }}>
                    4.5
                  </Text>
                  <Text
                    style={{
                      marginLeft: 10,
                      color: 'black',
                    }}>
                    1287 comments
                  </Text>
                </View>
                <View
                  style={{
                    height: 36,
                    width: '100%',
                    // backgroundColor: 'red',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      height: h('3'),
                      width: w('20'),
                      // backgroundColor: 'orange',
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                    }}>
                    <Icons name="ellipse-sharp" color="green" size={15}></Icons>
                    <Text
                      style={{
                        color: 'black',
                      }}>
                      Normal
                    </Text>
                  </View>
                  <View
                    style={{
                      height: h('3'),
                      width: w('20'),
                      // backgroundColor: 'orange',
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                    }}>
                    <Icons name="md-location" color="green" size={15}></Icons>
                    <Text
                      style={{
                        color: 'black',
                      }}>
                      1.7km
                    </Text>
                  </View>
                  <View
                    style={{
                      height: h('3'),
                      width: w('20'),
                      // backgroundColor: 'orange',
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                    }}>
                    <Icons name="time" color="green" size={15}></Icons>
                    <Text
                      style={{
                        color: 'black',
                      }}>
                      32min
                    </Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          {/* ImageBackground2 */}
          <TouchableOpacity>
            <ImageBackground
              source={require('../../assets/image5.jpg')}
              imageStyle={{borderRadius: 25}}
              style={{
                height: '85%',
                width: 300,
                // backgroundColor: 'blue',
                marginHorizontal: 45,
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <View
                style={{
                  height: '55%',
                  width: 275,
                  backgroundColor: 'white',
                  borderRadius: 15,
                  elevation: 5,
                  overflow: 'hidden',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: 'black',
                    margin: 10,
                  }}>
                  London Side
                </Text>
                <View
                  style={{
                    height: 25,
                    width: '100%',
                    // backgroundColor: 'green',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      height: 25,
                      width: '32%',
                      // backgroundColor: 'red',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Icon name="star" color="green" size={15}></Icon>

                    <Icon name="star" color="green" size={15}></Icon>

                    <Icon name="star" color="green" size={15}></Icon>
                    <Icon name="star" color="grey" size={15}></Icon>
                    <Icon name="star" color="grey" size={15}></Icon>
                  </View>

                  <Text
                    style={{
                      marginLeft: 3,
                      color: 'black',
                    }}>
                    3.5
                  </Text>
                  <Text
                    style={{
                      marginLeft: 10,
                      color: 'black',
                    }}>
                    1187 comments
                  </Text>
                </View>
                <View
                  style={{
                    height: 36,
                    width: '100%',
                    // backgroundColor: 'red',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      height: h('3'),
                      width: w('20'),
                      // backgroundColor: 'orange',
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                    }}>
                    <Icons name="ellipse-sharp" color="green" size={15}></Icons>
                    <Text
                      style={{
                        color: 'black',
                      }}>
                      Normal
                    </Text>
                  </View>
                  <View
                    style={{
                      height: h('3'),
                      width: w('20'),
                      // backgroundColor: 'orange',
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                    }}>
                    <Icons name="md-location" color="green" size={15}></Icons>
                    <Text
                      style={{
                        color: 'black',
                      }}>
                      2.5km
                    </Text>
                  </View>
                  <View
                    style={{
                      height: h('3'),
                      width: w('20'),
                      // backgroundColor: 'orange',
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                    }}>
                    <Icons name="time" color="green" size={15}></Icons>
                    <Text
                      style={{
                        color: 'black',
                      }}>
                      25min
                    </Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
          {/* ImageBackground3 */}
          <TouchableOpacity>
            <ImageBackground
              source={require('../../assets/image6.jpg')}
              imageStyle={{borderRadius: 25}}
              style={{
                height: '85%',
                width: 300,
                // backgroundColor: 'blue',
                marginHorizontal: 45,
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <View
                style={{
                  height: '55%',
                  width: 275,
                  backgroundColor: 'white',
                  borderRadius: 15,
                  elevation: 5,
                  overflow: 'hidden',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: 'black',
                    margin: 10,
                  }}>
                  England Side
                </Text>
                <View
                  style={{
                    height: 25,
                    width: '100%',
                    // backgroundColor: 'green',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      height: 25,
                      width: '32%',
                      // backgroundColor: 'red',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Icon name="star" color="green" size={15}></Icon>

                    <Icon name="star" color="green" size={15}></Icon>

                    <Icon name="star" color="green" size={15}></Icon>
                    <Icon name="star" color="green" size={15}></Icon>
                    <Icon name="star" color="grey" size={15}></Icon>
                  </View>

                  <Text
                    style={{
                      marginLeft: 3,
                      color: 'black',
                    }}>
                    4.0
                  </Text>
                  <Text
                    style={{
                      marginLeft: 10,
                      color: 'black',
                    }}>
                    1011 comments
                  </Text>
                </View>
                <View
                  style={{
                    height: 36,
                    width: '100%',
                    // backgroundColor: 'red',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      height: 20,
                      width: 70,
                      // backgroundColor: 'orange',
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                    }}>
                    <Icons name="ellipse-sharp" color="green" size={15}></Icons>
                    <Text
                      style={{
                        color: 'black',
                      }}>
                      Normal
                    </Text>
                  </View>
                  <View
                    style={{
                      height: 20,
                      width: 70,
                      // backgroundColor: 'orange',
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                    }}>
                    <Icons name="md-location" color="green" size={15}></Icons>
                    <Text
                      style={{
                        color: 'black',
                      }}>
                      1.3km
                    </Text>
                  </View>
                  <View
                    style={{
                      height: 20,
                      width: 70,
                      // backgroundColor: 'orange',
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                    }}>
                    <Icons name="time" color="green" size={15}></Icons>
                    <Text
                      style={{
                        color: 'black',
                      }}>
                      20min
                    </Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </ScrollView>
        <View
          style={{
            height: 30,
            width: '100%',
            // backgroundColor: 'orange',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icons
            name="md-ellipsis-horizontal-outline"
            color="black"
            size={35}></Icons>
        </View>
      </View>
      {/* text view */}
      <View
        style={{
          height: '10%',
          width: '100%',
          //  backgroundColor: 'red',
          flexDirection: 'row',
          marginLeft: 15,
        }}>
        <Text
          style={{
            fontSize: 25,
            color: 'black',
          }}>
          Popular
        </Text>
        <Text
          style={{
            color: 'grey',
            fontSize: 14,
            marginTop: 10,
          }}>
          {' '}
          . Food pairing
        </Text>
      </View>
      {/* vertical ScrollView */}
      <View
        style={{
          height: h('35'),
          // backgroundColor: 'blue',
        }}>
        <ScrollView>
          {/* first */}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Cart');
            }}
            style={{
              height: h('25'),
              // backgroundColor: 'red',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: h('18'),
                width: w('33'),
                //  backgroundColor: 'orange',
                borderRadius: 25,
                // marginHorizontal: 11,
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}>
              <Image
                source={require('../../assets/image4.jpg')}
                resizeMode={'contain'}
                style={{
                  height: 150,
                  width: 180,
                }}
              />
            </View>
            <View
              style={{
                height: h('15'),
                width: w('60'),
                backgroundColor: 'white',
                borderRadius: 15,
                elevation: 5,
                overflow: 'hidden',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  margin: 10,
                }}>
                Nutritious fruit meal i...
              </Text>
              <View
                style={{
                  height: 25,
                  width: '100%',
                  // backgroundColor: 'green',
                  // alignItems: 'center',
                }}>
                <Text
                  style={{
                    marginLeft: 3,
                    color: 'grey',
                  }}>
                  With chinese characteristics
                </Text>
              </View>
              <View
                style={{
                  height: h('6'),
                  width: w('60'),
                  // backgroundColor: 'red',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: 20,
                    width: 70,
                    // backgroundColor: 'orange',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <Icons name="ellipse-sharp" color="green" size={15}></Icons>
                  <Text
                    style={{
                      color: 'black',
                    }}>
                    Normal
                  </Text>
                </View>
                <View
                  style={{
                    height: 20,
                    width: 70,
                    // backgroundColor: 'orange',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <Icons name="md-location" color="green" size={15}></Icons>
                  <Text
                    style={{
                      color: 'black',
                    }}>
                    1.7km
                  </Text>
                </View>
                <View
                  style={{
                    height: 20,
                    width: 70,
                    // backgroundColor: 'orange',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <Icons name="time" color="green" size={15}></Icons>
                  <Text
                    style={{
                      color: 'black',
                    }}>
                    32min
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          {/* second */}
          <TouchableOpacity
            style={{
              height: h('25'),
              // backgroundColor: 'red',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: h('18'),
                width: w('33'),
                backgroundColor: 'orange',
                borderRadius: 25,
                // marginHorizontal: 11,
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}>
              <Image
                source={require('../../assets/image5.jpg')}
                resizeMode={'contain'}
                style={{
                  height: 150,
                  width: 240,
                }}
              />
            </View>
            <View
              style={{
                height: h('15'),
                width: w('60'),
                backgroundColor: 'white',
                borderRadius: 15,
                elevation: 5,
                overflow: 'hidden',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  margin: 10,
                }}>
                Nutritious fruit meal i...
              </Text>
              <View
                style={{
                  height: 25,
                  width: '100%',
                  // backgroundColor: 'green',
                  // alignItems: 'center',
                }}>
                <Text
                  style={{
                    marginLeft: 3,
                    color: 'grey',
                  }}>
                  With chinese characteristics
                </Text>
              </View>
              <View
                style={{
                  height: 36,
                  width: '100%',
                  // backgroundColor: 'red',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: 20,
                    width: 70,
                    // backgroundColor: 'orange',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <Icons name="ellipse-sharp" color="green" size={15}></Icons>
                  <Text
                    style={{
                      color: 'black',
                    }}>
                    Normal
                  </Text>
                </View>
                <View
                  style={{
                    height: 20,
                    width: 70,
                    // backgroundColor: 'orange',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <Icons name="md-location" color="green" size={15}></Icons>
                  <Text
                    style={{
                      color: 'black',
                    }}>
                    1.7km
                  </Text>
                </View>
                <View
                  style={{
                    height: 20,
                    width: 70,
                    // backgroundColor: 'orange',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <Icons name="time" color="green" size={15}></Icons>
                  <Text
                    style={{
                      color: 'black',
                    }}>
                    32min
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          {/* third */}
          <TouchableOpacity
            style={{
              height: h('25'),
              // backgroundColor: 'red',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: h('18'),
                width: w('33'),
                //  backgroundColor: 'orange',
                borderRadius: 25,
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}>
              <Image
                source={require('../../assets/image6.jpg')}
                resizeMode={'contain'}
                style={{
                  height: 150,
                  width: 210,
                }}
              />
            </View>
            <View
              style={{
                height: h('15'),
                width: w('60'),
                backgroundColor: 'white',
                borderRadius: 15,
                elevation: 5,
                overflow: 'hidden',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  margin: 10,
                }}>
                Nutritious fruit meal i...
              </Text>
              <View
                style={{
                  height: 25,
                  width: '100%',
                  // backgroundColor: 'green',
                  // alignItems: 'center',
                }}>
                <Text
                  style={{
                    marginLeft: 3,
                    color: 'grey',
                  }}>
                  With chinese characteristics
                </Text>
              </View>
              <View
                style={{
                  height: 36,
                  width: '100%',
                  // backgroundColor: 'red',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: 20,
                    width: 70,
                    // backgroundColor: 'orange',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <Icons name="ellipse-sharp" color="green" size={15}></Icons>
                  <Text
                    style={{
                      color: 'black',
                    }}>
                    Normal
                  </Text>
                </View>
                <View
                  style={{
                    height: 20,
                    width: 70,
                    // backgroundColor: 'orange',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <Icons name="md-location" color="green" size={15}></Icons>
                  <Text
                    style={{
                      color: 'black',
                    }}>
                    1.7km
                  </Text>
                </View>
                <View
                  style={{
                    height: 20,
                    width: 70,
                    // backgroundColor: 'orange',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <Icons name="time" color="green" size={15}></Icons>
                  <Text
                    style={{
                      color: 'black',
                    }}>
                    32min
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          {/* Four */}

          <TouchableOpacity
            style={{
              height: h('25'),
              // backgroundColor: 'red',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: h('18'),
                width: w('33'),
                //  backgroundColor: 'orange',
                borderRadius: 25,
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}>
              <Image
                source={require('../../assets/image6.jpg')}
                resizeMode={'contain'}
                style={{
                  height: 150,
                  width: 210,
                }}
              />
            </View>
            <View
              style={{
                height: h('15'),
                width: w('60'),
                backgroundColor: 'white',
                borderRadius: 15,
                elevation: 5,
                overflow: 'hidden',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  margin: 10,
                }}>
                Nutritious fruit meal i...
              </Text>
              <View
                style={{
                  height: 25,
                  width: '100%',
                  // backgroundColor: 'green',
                  // alignItems: 'center',
                }}>
                <Text
                  style={{
                    marginLeft: 3,
                    color: 'grey',
                  }}>
                  With chinese characteristics
                </Text>
              </View>
              <View
                style={{
                  height: 36,
                  width: '100%',
                  // backgroundColor: 'red',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: 20,
                    width: 70,
                    // backgroundColor: 'orange',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <Icons name="ellipse-sharp" color="green" size={15}></Icons>
                  <Text
                    style={{
                      color: 'black',
                    }}>
                    Normal
                  </Text>
                </View>
                <View
                  style={{
                    height: 20,
                    width: 70,
                    // backgroundColor: 'orange',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <Icons name="md-location" color="green" size={15}></Icons>
                  <Text
                    style={{
                      color: 'black',
                    }}>
                    1.7km
                  </Text>
                </View>
                <View
                  style={{
                    height: 20,
                    width: 70,
                    // backgroundColor: 'orange',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <Icons name="time" color="green" size={15}></Icons>
                  <Text
                    style={{
                      color: 'black',
                    }}>
                    32min
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};
