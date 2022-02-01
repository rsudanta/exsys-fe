import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IcPoint } from '../../../assets';

const Button = ({
    text,
    color = '#557DE5',
    textColor = 'white',
    onPress,
}) => {
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
            <View style={styles.container(color)}>
                <Text style={styles.text(textColor)}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    container: color => ({
        backgroundColor: color,
        padding: 12,
        borderRadius: 40,
        flexDirection: 'row',
        justifyContent: 'center',
    }),
    text: color => ({
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        color: color,
        textAlign: 'center',
    }),
    pointContainer: { flexDirection: 'row', alignItems: 'center' },
    ic: {
        marginLeft: 12,
    },
    textAlt: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        color: 'white',
        marginLeft: 3,
        textAlign: 'center',
    },
});
