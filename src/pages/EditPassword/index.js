import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button, Gap, TextInput } from '../../component';
import { useForm } from '../../utils';
import { useDispatch } from 'react-redux';
import { editPasswordAction } from '../../redux/action';

const EditPassword = ({ navigation }) => {
    const dispatch = useDispatch();
    const [form, setForm] = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const onSubmit = () => {
        dispatch(editPasswordAction(form, navigation));
    }
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <TextInput
                    label="Password Lama"
                    placeholder="Masukkan password lama anda"
                    value={form.current_password}
                    onChangeText={value => setForm('current_password', value)}
                    secureTextEntry
                />
                <Gap height={16} />
                <TextInput
                    label="Password Baru"
                    placeholder="Masukkan password baru anda"
                    value={form.password}
                    onChangeText={value => setForm('password', value)}
                    secureTextEntry
                />
                <Gap height={16} />
                <TextInput
                    label="Konfirmasi Password Baru"
                    placeholder="Masukkan konfirmasi password baru anda"
                    value={form.password_confirmation}
                    onChangeText={value => setForm('password_confirmation', value)}
                    secureTextEntry
                />
                <Gap height={40} />
                <Button text="Simpan" onPress={onSubmit} />
            </View>
        </ScrollView>
    );
};

export default EditPassword;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingTop: 20,
        backgroundColor: 'white',
        flex: 1
    },
});
