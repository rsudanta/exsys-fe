import axios from 'axios';

export const getStatistic = () => dispatch => {
    axios.get('https://api.kawalcorona.com/indonesia')
        .then(res => {
            dispatch({ type: 'SET_STATISTIC', value: res.data[0] });
        })
        .catch(err => {
            console.log('err get statistic', err)
        })

};
