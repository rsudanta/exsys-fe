import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { getData } from '../../utils';
import { useDispatch } from 'react-redux';
import { setProfile } from '../../redux/action';

const SplashScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            getData('token').then(res => {
                if (res) {
                    navigation.reset({ index: 0, routes: [{ name: 'MainApp' }] });
                } else {
                    navigation.replace('Login');
                }
            });
            getData('userProfile').then(res => {
                dispatch(setProfile(res));
            });
        }, 2000);
    }, []);
    return (
        <View>
            <Text>Splash</Text>
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({});
