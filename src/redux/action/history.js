import axios from "axios";
import { setLoadingHistory, setRefreshing } from ".";
import { API_HOST } from "../../config";
import { getData } from "../../utils";

export const getHistory = () => dispatch => {
    getData('token').then(token => {
        axios.get(`${API_HOST.url}/riwayat-konsultasi`, {
            headers: {
                Authorization: token.value
            }
        })
            .then(res => {
                dispatch({ type: 'SET_HISTORY', value: res.data.data });
                dispatch(setRefreshing(false));
                dispatch(setLoadingHistory(false));
            })
            .catch(err => {
                console.log('err get question', err);
                dispatch(setRefreshing(false));
                dispatch(setLoadingHistory(false));
            });
    });
}
