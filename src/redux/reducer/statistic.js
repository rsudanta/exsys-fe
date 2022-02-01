const initStatistic = {
    covidStat: [],
};

export const statisticReducer = (state = initStatistic, action) => {
    if (action.type === 'SET_STATISTIC') {
        return {
            ...state,
            covidStat: action.value
        };
    }
    return state;
};
