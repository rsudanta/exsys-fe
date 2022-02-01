import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button, Gap, Header, TextInput } from '../../component';
import { registerAction } from '../../redux/action';
import { useForm } from '../../utils';
import { useDispatch } from 'react-redux';

const Register = ({ navigation }) => {
    const [form, setForm] = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });
    const dispatch = useDispatch();

    const onSubmit = () => {
        dispatch(registerAction(form, navigation));
    };
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Header
                title="Daftar"
                subTitle="Deteksi diri anda sekarang"
                onBack={() => {
                    navigation.goBack();
                }}
            />
            <Gap height={20} />
            <View style={styles.container}>
                <TextInput
                    label="Nama Lengkap"
                    placeholder="Masukkan nama lengkap anda"
                    onChangeText={value => setForm('name', value)}
                />
                <Gap height={16} />
                <TextInput
                    label="Email"
                    placeholder="Masukkan email anda"
                    onChangeText={value => setForm('email', value)}
                />
                <Gap height={16} />
                <TextInput
                    label="Kata Sandi"
                    placeholder="Masukkan kata sandi anda"
                    onChangeText={value => setForm('password', value)}
                    secureTextEntry
                />
                <Gap height={16} />
                <TextInput
                    label="Konfirmasi Kata Sandi"
                    placeholder="Masukkan Konfirmasi kata sandi anda"
                    onChangeText={value => setForm('password_confirmation', value)}
                    secureTextEntry
                />
                <Gap height={24} />
                <Button
                    text="Daftar"
                    onPress={onSubmit}
                />
                <Gap height={16} />
            </View>
        </ScrollView>
    );
};

export default Register;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingTop: 20,
        backgroundColor: 'white',
        flex: 1
    }
});
