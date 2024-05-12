import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Permission from '../screens/Permission';
import { BottomTabNavigator } from './BottomTab.Navigator';
import AddTodo from '../screens/todo/AddTodo.screen';
import ListTask from '../screens/todo/ListTask.screen';

export type ScreenName =
    "Permission" |
    "BottomTabNavigator" |
    "AddTodo" |
    "ListTask"
    ;


export type MainStackParams = {
    Permission: any | undefined;
    BottomTabNavigator: any | undefined;
};

export type RootStackParams = {
    MainStackNavigator: undefined;
    BottomTabNavigator: undefined;
    AddTodo: any;
    ListTask: any;
};

export type AllStackParams = {
    Permission: any | undefined;
    BottomTabNavigator: any | undefined;
    MainStackNavigator: undefined;
    AddTodo: any;
    ListTask: any;
}

const MainStack = createStackNavigator<MainStackParams>();
const RootStack = createStackNavigator<RootStackParams>();

export const MainStackNavigator: React.FC = () => (
    <MainStack.Navigator>
        <MainStack.Screen name='Permission' component={Permission} options={{ headerShown: false, gestureEnabled: false, }} />
    </MainStack.Navigator>
);

export const RootStackNavigator: React.FC = () => (
    <RootStack.Navigator>
        <RootStack.Screen
            name='MainStackNavigator'
            component={MainStackNavigator}
            options={{ headerShown: false, gestureEnabled: false, }}
        />
        <RootStack.Screen
            name='BottomTabNavigator'
            component={BottomTabNavigator}
            options={{ headerShown: false, gestureEnabled: false, }}
        />
        <RootStack.Screen
            name='AddTodo'
            component={AddTodo}
            options={{ headerShown: false, gestureEnabled: false, }}
        />
        <RootStack.Screen
            name='ListTask'
            component={ListTask}
            options={{ headerShown: false, gestureEnabled: false, }}
        />
    </RootStack.Navigator>
);