import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Gap, Header } from '../../component';
import { intepretationValue } from '../../utils';

const Result = ({ navigation, route }) => {
    const result = route.params;
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Header
                title="Sistem Pakar COVID-19"
                subTitle="Sistem Pakar COVID-19"
                onBack={() => {
                    navigation.goBack();
                }} />
            <Gap height={20} />
            <View style={styles.container}>
                <Text style={styles.title}>Hasil Konsultasi</Text>
                {result.hasilCF ?
                    <Text style={styles.subTitle}>{result.hasilCF * 100}% anda mengalami
                        <Text style={styles.bold}> {result.nama_penyakit} </Text>
                        ({intepretationValue(result.hasilCF)})
                    </Text>
                    :
                    <Text style={styles.subTitle}>{result}</Text>
                }
                <Gap height={20} />
                <Text style={styles.title}>Solusi</Text>
                <Text style={styles.subTitle}>{result.solusi ? result.solusi : '-'}</Text>
            </View>
        </ScrollView>
    );
};

export default Result;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingTop: 20,
        backgroundColor: 'white',
        flex: 1
    },
    title: {
        fontSize: 18,
        fontFamily: 'Poppins-Medium',
        color: 'black'
    },
    subTitle: {
        fontSize: 18,
        fontFamily: 'Poppins-Light',
        color: 'black'
    },
    bold: {
        fontFamily: 'Poppins-SemiBold'
    }

});
