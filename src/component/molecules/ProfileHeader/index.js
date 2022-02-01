import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IcSetting } from '../../../assets';

const ProfileHeader = ({ photo, name, email, onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.ic}
                onPress={onPress}
                activeOpacity={0.7}
            >
                <IcSetting />
            </TouchableOpacity>
            <Image source={{ uri: photo }} style={styles.photoContainer} />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.email}>{email}</Text>
        </View>
    );
};

export default ProfileHeader;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 40,
        alignItems: 'center'
    },
    photoContainer: {
        width: 100,
        height: 100,
        borderRadius: 100,
        padding: 24,
    },
    name: {
        fontFamily: 'Poppins-Medium',
        fontSize: 18,
        paddingTop: 16,
        color: 'black',
        textAlign: 'center',
    },
    email: {
        fontFamily: 'Poppins-Light',
        fontSize: 14,
        color: '#8F9AD8',
    },
    ic: {
        position: 'absolute',
        right: 0,
        margin: 24
    }
});
