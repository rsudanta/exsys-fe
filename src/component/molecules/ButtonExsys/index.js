import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { IlButton } from '../../../assets';

const ButtonExsys = ({ onPress }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.7}
            onPress={onPress}>
            <IlButton></IlButton>
            <Text style={styles.text}>Sistem Pakar COVID-19</Text>
        </TouchableOpacity>
    );
};

export default ButtonExsys;

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#557DE5',
        backgroundColor: '#557DE5',
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    text: {
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
        color: 'white',
        textAlign: 'center'
    },
    illustrator: {
        width: 30,
        height: 30
    }
});
