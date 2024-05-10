import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { BottomTabNavigator } from './BottomTab.Navigator';
import Home from '../screens/Home';

export type ScreenName =
    "BottomTabNavigator" |
    "Home"
    ;


export type MainStackParams = {
    BottomTabNavigator: any | undefined;
};

export type RootStackParams = {
    MainStackNavigator: undefined;
    BottomTabNavigator: any | undefined;
};

export type AllStackParams = {
    MainStackNavigator: undefined;
    BottomTabNavigator: any | undefined;
    Home: undefined;
}

const MainStack = createStackNavigator<MainStackParams>();
const RootStack = createStackNavigator<RootStackParams>();

const MainStackNavigator: React.FC = () => (
    <MainStack.Navigator>
        <RootStack.Screen
            name='BottomTabNavigator'
            component={BottomTabNavigator}
            options={{ headerShown: false, gestureEnabled: false, }}
        />
    </MainStack.Navigator>
);

export const RootStackNavigator: React.FC = () => (
    <RootStack.Navigator>
        <RootStack.Screen
            name='MainStackNavigator'
            component={MainStackNavigator}
            options={{ headerShown: false, gestureEnabled: false, }}
        />
    </RootStack.Navigator>
);