import axios from "axios";
import { setLoading, setProfile } from ".";
import { API_HOST } from '../../config';
import { getData, showMessage, storeData } from "../../utils";

export const loginAction = (data, navigation) => dispatch => {
    dispatch(setLoading(true));
    axios
        .post(`${API_HOST.url}/login`, data)
        .then(res => {
            const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
            const profile = res.data.data.user;
            storeData('token', { value: token });
            storeData('userProfile', profile);
            dispatch(setProfile(profile));
            dispatch(setLoading(false));
            navigation.reset({ index: 0, routes: [{ name: 'MainApp' }] });
        })
        .catch(err => {
            console.log('error login', err);
            dispatch(setLoading(false));
            showMessage(err?.response?.data?.data?.message);
        });
};

export const registerAction = (data, navigation) => dispatch => {
    dispatch(setLoading(true));
    axios
        .post(`${API_HOST.url}/register`, data)
        .then(res => {
            const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
            const profile = res.data.data.user;
            storeData('token', { value: token });
            storeData('userProfile', profile);
            dispatch(setProfile(profile));
            dispatch(setLoading(false));
            navigation.reset({ index: 0, routes: [{ name: 'MainApp' }] });
        })
        .catch(err => {
            console.log('error login', err);
            dispatch(setLoading(false));
            showMessage(err?.response?.data?.data?.message);
        });
};

export const editProfileAction = (data, navigation) => dispatch => {
    dispatch(setLoading(true));
    getData('token').then(token => {
        axios
            .post(`${API_HOST.url}/update/profile`, data, {
                headers: {
                    Authorization: token.value
                }
            })
            .then(res => {
                const profile = res.data.data;
                storeData('userProfile', profile);
                dispatch(setProfile(profile));
                dispatch(setLoading(false));
                navigation.navigate('Profile');
                showMessage('Profil berhasil diganti', 'success');
            }).catch(err => {
                dispatch(setLoading(false));
                showMessage(err?.response?.data?.data?.message);
            })
    })
};

export const editPasswordAction = (data, navigation) => dispatch => {
    dispatch(setLoading(true));
    getData('token').then(token => {
        axios
            .post(`${API_HOST.url}/update/password`, data, {
                headers: {
                    Authorization: token.value
                }
            })
            .then(res => {
                dispatch(setLoading(false));
                navigation.navigate('Profile');
                showMessage('Password berhasil diganti', 'success');
            }).catch(err => {
                dispatch(setLoading(false));
                showMessage(err?.response?.data?.data?.message);
            })
    })
};
