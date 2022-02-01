import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IcBack } from '../../../assets';

const Header = ({ title, subTitle, onBack, onPressProfile, photo }) => {
    return (
        <View style={styles.container}>
            {onBack && (
                <TouchableOpacity activeOpacity={0.7} onPress={onBack}>
                    <View style={styles.back}>
                        <IcBack />
                    </View>
                </TouchableOpacity>
            )}
            <View style={styles.contentContainer}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subTitle}>{subTitle}</Text>
                </View>
                {
                    onPressProfile &&
                    <TouchableOpacity activeOpacity={0.7} onPress={onPressProfile}>
                        <Image style={styles.profile} source={{ uri: photo }} />
                    </TouchableOpacity>
                }
            </View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    title: { fontFamily: 'Poppins-Medium', fontSize: 22, color: 'black' },
    subTitle: { fontFamily: 'Poppins-Light', fontSize: 14, color: '#8D92A3' },
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingTop: 30,
        paddingBottom: 24,
        flexDirection: 'row',
        alignItems: 'center',
    },
    back: { padding: 16, marginRight: 16, marginLeft: -10 },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    profile: {
        width: 40,
        height: 40,
        borderRadius: 8
    }
});
