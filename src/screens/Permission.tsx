import {useNavigation, useRoute} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as Progress from 'react-native-progress';

import {MainStackParams} from '../navigation/Stack.Navigator';

const Permission: React.FC<{route: any}> = ({route}) => {
  const navigation = useNavigation<StackNavigationProp<MainStackParams>>();

  useEffect(() => {
    navigation.navigate('BottomTabNavigator');
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../assets/image/logo.png')}
          style={{
            width: 200,
            height: 132,
          }}
        />
        <Progress.Bar
          progress={0.5}
          width={200}
          indeterminate={true}
          borderWidth={0}
          height={2}
          borderRadius={5}
          // animationType={'decay'}
          color={'#8043CC'}
        />
      </View>
    </View>
  );
};
export default Permission;
