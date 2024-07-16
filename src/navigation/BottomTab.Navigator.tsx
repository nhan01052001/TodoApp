import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import IconAntDesign from 'react-native-vector-icons/AntDesign';

import Home from '../screens/Home';
import Setting from '../screens/Setting';
import {Colors} from '../global/theme/Colors.Theme';

const BottomTabs = createBottomTabNavigator();

export const BottomTabNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#8043CC',
        tabBarInactiveTintColor: 'grey',
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: '700',
        },
        style: {
          borderTopWidth: 1,
          borderTopColor: 'red',
        },
        tabBarIcon: () => {
          if (route.name === 'Home') {
            return (
              <View>
                <IconAntDesign name={'home'} size={22} color={Colors.black} />
              </View>
            );
          }

          if (route.name === 'Setting') {
            return (
              <View>
                <IconAntDesign
                  name={'setting'}
                  size={22}
                  color={Colors.black}
                />
              </View>
            );
          }

          return null;
        },
      })}>
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          title: 'Trang chủ',
        }}
      />

      <BottomTabs.Screen
        name="Setting"
        component={Setting}
        options={{headerShown: false, title: 'Cài đặt', unmountOnBlur: true}}
      />
    </BottomTabs.Navigator>
  );
};
