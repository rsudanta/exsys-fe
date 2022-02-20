import axios from 'axios';

export const getStatistic = () => dispatch => {
    axios.get('https://dekontaminasi.com/api/id/covid19/stats')
        .then(res => {
            dispatch({ type: 'SET_STATISTIC', value: res.data.numbers });
        })
        .catch(err => {
            console.log('err get statistic', err)
        })

};
