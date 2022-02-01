const initHistory = {
    history: [],
};

export const historyReducer = (state = initHistory, action) => {
    if (action.type === 'SET_HISTORY') {
        return {
            ...state,
            history: action.value
        };
    }
    return state;
};
