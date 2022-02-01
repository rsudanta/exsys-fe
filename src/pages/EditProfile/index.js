import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Gap, TextInput } from '../../component';
import { editProfileAction } from '../../redux/action';
import { getData, useForm } from '../../utils';

const EditProfile = ({ navigation }) => {
    const dispatch = useDispatch();
    const { profile } = useSelector(state => state.globalReducer);
    const [form, setForm] = useForm({
        name: profile.name,
    });

    const onSubmit = () => {
        dispatch(editProfileAction(form, navigation));
    }
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                <TextInput
                    label="Nama"
                    placeholder="Masukkan nama lengkap anda"
                    value={form.name}
                    onChangeText={value => setForm('name', value)}
                />
                <Gap height={40} />
                <Button text="Simpan" onPress={onSubmit} />
            </View>
        </ScrollView>
    );
};

export default EditProfile;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingTop: 20,
        backgroundColor: 'white',
        flex: 1
    },
});
