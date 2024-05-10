import React from 'react'
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import IconAntDesign from 'react-native-vector-icons/AntDesign';

import Home from '../screens/Home';
import Setting from '../screens/Setting';


const BottomTabs = createBottomTabNavigator();

export const BottomTabNavigator: React.FC = () => {

    return (
        <BottomTabs.Navigator
            initialRouteName='Home'
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: '#8043CC',
                tabBarInactiveTintColor: 'grey',
                tabBarShowLabel: true,
                tabBarLabelStyle: {
                    fontSize: 13,
                    fontWeight: "700",
                },
                tabBarIcon: ({ color, size }) => {
                    if (route.name === 'Home') {                        
                        return <IconAntDesign name={'home'} size={16} color={'#000'} />
                    }

                    if (route.name === 'Setting') {
                        return <IconAntDesign name={'setting'} size={16} color={'#000'} />
                    }

                    return null;
                },

            })}
        >
            <BottomTabs.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false, title: 'Trang chủ' }}
            />

            <BottomTabs.Screen
                name='Setting'
                component={Setting}
                options={{ headerShown: false, title: 'Cài đặt', unmountOnBlur: true }}
            />
        </BottomTabs.Navigator>
    )
};

const styles = StyleSheet.create({
    upSize: {
        height: 100
    }
})