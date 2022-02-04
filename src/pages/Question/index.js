import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Gap, Header } from '../../component';
import { getQuestion, postAnswer } from '../../redux/action';

const Question = ({ navigation }) => {
    const [no, setNo] = useState(0);
    const [form, setForm] = useState([]);
    const dispatch = useDispatch();
    const { question } = useSelector(state => state.questionReducer);

    useEffect(() => {
    }, [form]);

    const onSubmitPasti = () => {
        if (no < question.length - 1) {
            setForm((prevState) => [...prevState, { id_gejala: question[no].id, nilai_cf: 1 }]);
            setNo(no + 1);
        }
        else {
            setForm((prevState) => [...prevState, { id_gejala: question[no].id, nilai_cf: 1 }]);
            dispatch(postAnswer(form, navigation));
        }
    }
    const onSubmitHampirPasti = () => {
        if (no < question.length - 1) {
            setForm((prevState) => [...prevState, { id_gejala: question[no].id, nilai_cf: 0.8 }]);
            setNo(no + 1);
        }
        else {
            setForm((prevState) => [...prevState, { id_gejala: question[no].id, nilai_cf: 0.8 }]);
            dispatch(postAnswer(form, navigation));
        }
    }
    const onSubmitKemungkinanBesar = () => {
        if (no < question.length - 1) {
            setForm((prevState) => [...prevState, { id_gejala: question[no].id, nilai_cf: 0.6 }]);
            setNo(no + 1);
        }
        else {
            setForm((prevState) => [...prevState, { id_gejala: question[no].id, nilai_cf: 0.6 }]);
            dispatch(postAnswer(form, navigation));
        }
    }
    const onSubmitMungkin = () => {
        if (no < question.length - 1) {
            setForm((prevState) => [...prevState, { id_gejala: question[no].id, nilai_cf: 0.4 }]);
            setNo(no + 1);
        }
        else {
            setForm((prevState) => [...prevState, { id_gejala: question[no].id, nilai_cf: 0.4 }]);
            dispatch(postAnswer(form, navigation));
        }
    }
    const onSubmitTidak = () => {
        if (no < question.length - 1) {
            setNo(no + 1);
        }
        else {
            dispatch(postAnswer(form, navigation));
        }
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Header
                title="Sistem Pakar COVID-19"
                subTitle="Deteksi diri anda sekarang"
                onBack={() => {
                    navigation.goBack();
                }} />
            <Gap height={20} />
            <View style={styles.container}>
                <Text style={styles.question}>Dalam range dibawah seberapa yakin anda merasakan gejala
                    <Text style={styles.bold}>
                        {question.length > 0 ? ` ${question[no].nama_gejala.toLowerCase()}` : ''}
                    </Text>
                    ?
                </Text>
                <Gap height={20} />
                <Button
                    text="Pasti"
                    onPress={onSubmitPasti}
                />
                <Gap height={16} />
                <Button
                    text="Hampir Pasti"
                    color='#42B8C0'
                    onPress={onSubmitHampirPasti}
                />
                <Gap height={16} />
                <Button
                    text="Kemungkinan Besar"
                    color='#5BC042'
                    onPress={onSubmitKemungkinanBesar}

                />
                <Gap height={16} />
                <Button
                    text="Mungkin"
                    color='#FFDB59'
                    onPress={onSubmitMungkin}

                />
                <Gap height={16} />
                <Button
                    text="Tidak"
                    color='#BC1727'
                    onPress={onSubmitTidak}

                />
            </View>
        </ScrollView>
    );
};

export default Question;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingTop: 20,
        backgroundColor: 'white',
        flex: 1
    },
    question: {
        fontSize: 18,
        fontFamily: 'Poppins-Light',
        color: 'black'
    },
    bold: {
        fontFamily: 'Poppins-SemiBold'
    }
});
