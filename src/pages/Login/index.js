import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, Gap, Header, TextInput } from '../../component';
import { loginAction } from '../../redux/action';
import { useForm } from '../../utils';

const Login = ({ navigation }) => {
    const [form, setForm] = useForm({
        email: '',
        password: '',
    });
    const dispatch = useDispatch();

    const onSubmit = () => {
        dispatch(loginAction(form, navigation));
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <Header title="Masuk" subTitle="Deteksi diri anda sekarang" />
            <Gap height={20} />
            <View style={styles.container}>
                <TextInput
                    label="Email"
                    placeholder="Masukkan email anda"
                    value={form.email}
                    onChangeText={value => setForm('email', value)}
                />
                <Gap height={16} />
                <TextInput
                    label="Kata Sandi"
                    placeholder="Masukkan kata sandi anda"
                    value={form.password}
                    onChangeText={value => setForm('password', value)}
                    secureTextEntry
                />
                <Gap height={24} />
                <Button text="Masuk" onPress={onSubmit} />
                <Gap height={16} />
                <Button text="Daftar" color='#94ACE9' onPress={() => {
                    navigation.navigate('Register')
                }} />
            </View>
        </ScrollView>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingTop: 20,
        backgroundColor: 'white',
        flex: 1
    }
});
