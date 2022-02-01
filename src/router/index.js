import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { BottomNavigator } from '../component';
import { EditPassword, EditProfile, Login, Profile, Question, Register, Result, Setting, SplashScreen } from '../pages';
import Home from '../pages/Home';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>
    );
};

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }} />
            <Stack.Screen name="Question" component={Question} options={{ headerShown: false }} />
            <Stack.Screen name="Result" component={Result} options={{ headerShown: false }} />
            <Stack.Screen name="Setting" component={Setting} options={{ headerTitle: 'Pengaturan' }} />
            <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerTitle: 'Ganti Profil' }} />
            <Stack.Screen name="EditPassword" component={EditPassword} options={{ headerTitle: 'Ganti Password' }} />
        </Stack.Navigator>
    );
};

export default Router;
