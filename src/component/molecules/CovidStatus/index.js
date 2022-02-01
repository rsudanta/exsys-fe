import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Gap } from '../..';
import { dateFormat } from '../../../utils';
import { IcRefresh } from '../../../assets';

const CovidStatus = ({ confirmed, active, recoveries, deaths, onRefresh }) => {
    var date = new Date();

    return (
        <View>
            <Text style={styles.title}>Statistik COVID-19 Indonesia</Text>
            <Text style={styles.date}>{dateFormat(date)}</Text>
            <Gap height={16} />
            <View style={styles.mainStatus}>
                <View style={styles.refreshContainer}>
                    <Text style={styles.titleStatus}>TOTAL KASUS TERKONFIRMASI</Text>
                    <TouchableOpacity onPress={onRefresh} >
                        <IcRefresh />
                    </TouchableOpacity>
                </View>
                <Text style={styles.mainCount}>{confirmed}</Text>
            </View>
            <Gap height={10} />
            <View style={styles.subStatusContainer} >
                <View style={styles.subStatus}>
                    <Text style={styles.subStatusTitle}>Dirawat</Text>
                    <Text style={styles.subStatusCount}>{active}</Text>
                </View>
                <View style={styles.subStatus}>
                    <Text style={styles.subStatusTitle}>Sembuh</Text>
                    <Text style={styles.subStatusCount}>{recoveries}</Text>
                </View>
                <View style={styles.subStatus}>
                    <Text style={styles.subStatusTitle}>Meninggal</Text>
                    <Text style={styles.subStatusCount}>{deaths}</Text>
                </View>
            </View>
        </View>
    );
};

export default CovidStatus;

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontFamily: 'Poppins-Medium',
        color: 'black'
    },
    date: {
        fontSize: 12,
        fontFamily: 'Poppins-Light',
        color: 'black'
    },
    mainStatus: {
        backgroundColor: '#E55555',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 10,
    },
    titleStatus: {
        fontSize: 12,
        fontFamily: 'Poppins-Medium',
        color: 'white'
    },
    mainCount: {
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
        color: 'white',
    },
    subStatusContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    subStatus: {
        backgroundColor: '#EBEBEB',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 10,
        width: '31%'
    },
    subStatusTitle: {
        fontSize: 12,
        fontFamily: 'Poppins-Light',
        color: 'black',
    },
    subStatusCount: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        color: 'black',
    },
    refreshContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});
