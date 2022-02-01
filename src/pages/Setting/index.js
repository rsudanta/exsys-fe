import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { SettingItem } from '../../component';
import { setLoading } from '../../redux/action';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Setting = ({ navigation }) => {
    const dispatch = useDispatch();
    const signOut = () => {
        dispatch(setLoading(true));
        AsyncStorage.multiRemove(['userProfile', 'token']).then(() => {
            dispatch(setLoading(false));
            navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
        });
    };
    return (
        <View style={styles.page}>
            <SettingItem
                name="Ganti Profil"
                onPress={() => {
                    navigation.navigate('EditProfile')
                }}
            />
            <SettingItem
                name="Ganti Password"
                onPress={() => {
                    navigation.navigate('EditPassword')
                }}
            />
            <SettingItem
                name="Keluar"
                onPress={signOut} />
        </View>
    );
};

export default Setting;

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
    },
});
