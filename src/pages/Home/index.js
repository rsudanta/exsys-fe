import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonExsys, CovidStatus, Gap, Header } from '../../component';
import { getQuestion, setLoading } from '../../redux/action';
import { getStatistic } from '../../redux/action/statistic';
import { getData } from '../../utils';

const Home = ({ navigation }) => {
    const dispatch = useDispatch();
    const { covidStat } = useSelector(state => state.statisticReducer);
    const { profile } = useSelector(state => state.globalReducer);
    const [name, setName] = useState('');

    const onRefresh = () => {
        dispatch({ type: 'SET_STATISTIC', value: [] });
        dispatch(getStatistic());
    }

    useEffect(() => {
        getData('userProfile').then(res => {
            let firstName = res.name.split(" ")[0]
            setName(firstName);
        });
        dispatch(getStatistic());
    }, [profile]);
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Header
                title={`Hi, ${name}`}
                subTitle="Deteksi diri anda sekarang"
                photo={profile.profile_photo_url}
                onPressProfile={() => {
                    navigation.navigate('Profile')
                }} />
            <Gap height={20} />
            <View style={styles.container}>
                <CovidStatus
                    confirmed={covidStat.positif}
                    active={covidStat.dirawat}
                    recoveries={covidStat.sembuh}
                    deaths={covidStat.meninggal}
                    onRefresh={onRefresh}
                />
                <Gap height={40} />
                <Text style={styles.title}>Deteksi Awal COVID-19</Text>
                <Text style={styles.subTitle}>Periksakan diri anda dengan sistem pakar COVID-19. Sistem akan memberikan persentase kemungkinan anda terkena COVID-19 berdasarkan nilai keyakinan pakar.</Text>
                <Gap height={10} />
                <ButtonExsys onPress={() => {
                    dispatch(setLoading(true))
                    dispatch(getQuestion());
                    navigation.navigate('Question')
                }} />
            </View>
        </ScrollView>
    );
};

export default Home;

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
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        color: 'black'
    },

});
