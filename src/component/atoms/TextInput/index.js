import React from 'react';
import { StyleSheet, Text, View, TextInput as TextInputRN } from 'react-native';

const TextInput = ({ label, placeholder, ...restProps }) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInputRN
                placeholderTextColor="grey"
                placeholder={placeholder}
                style={styles.input}
                {...restProps}
            />
        </View>
    );
};

export default TextInput;

const styles = StyleSheet.create({
    label: { fontSize: 14, fontFamily: 'Poppins-Regular', color: 'black' },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 8,
        padding: 10,
        color: 'black',
    },
});
