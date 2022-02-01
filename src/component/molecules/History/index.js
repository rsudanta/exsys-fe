import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { dateFormat, intepretationValue } from '../../../utils';

const History = ({ CFValue, disease, date }) => {

    return (
        <View style={styles.container}>
            {CFValue ?
                <Text style={styles.result}>Hasil : {CFValue * 100}% anda mengalami
                    <Text style={styles.bold}> {disease} </Text>
                    ({intepretationValue(CFValue)})
                </Text> :
                <Text style={styles.result}>Hasil nilai keyakinan sama dengan nol
                </Text>}
            <Text style={styles.date}>{dateFormat(date)}</Text>
        </View>
    );
};

export default History;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 14,
        paddingHorizontal: 14,
        marginTop: 16
    },
    result: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: 'black'
    },
    date: {
        fontSize: 12,
        fontFamily: 'Poppins-Light',
        color: 'black'
    },
    bold: {
        fontFamily: 'Poppins-SemiBold',
        color: '#557DE5'
    }
});
