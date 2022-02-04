import axios from 'axios';
import { setLoading } from '.';
import { API_HOST } from '../../config';
import { getData, showMessage } from '../../utils';

export const getQuestion = () => dispatch => {
    axios.get(`${API_HOST.url}/gejala`)
        .then(res => {
            dispatch(setLoading(false));
            dispatch({ type: 'SET_QUESTION', value: res.data.data });
        })
        .catch(err => {
            dispatch(setLoading(false));
            console.log('err get question', err)
        })

};

export const postAnswer = (data, navigation) => dispatch => {
    dispatch(setLoading(true));
    getData('token').then(token => {
        axios.post(`${API_HOST.url}/hitung`, data, {
            headers: {
                Authorization: token.value
            }
        })
            .then(res => {
                dispatch(setLoading(false));
                navigation.replace('Result', res.data.data);
            })
            .catch(err => {
                console.log('err post answer', err)
                dispatch(setLoading(false));
                showMessage(err.message);
            })
    });

};
