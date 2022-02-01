const initGlobalState = {
    isLoading: false,
    isRefreshing: false,
    isLoadingHistory: true,
    profile: []
};

export const globalReducer = (state = initGlobalState, action) => {
    if (action.type === 'SET_LOADING') {
        return {
            ...state,
            isLoading: action.value,
        };
    }
    if (action.type === 'SET_REFRESHING') {
        return {
            ...state,
            isRefreshing: action.value,
        };
    }
    if (action.type === 'SET_LOADING_HISTORY') {
        return {
            ...state,
            isLoadingHistory: action.value,
        };
    }
    if (action.type === 'SET_PROFILE') {
        return {
            ...state,
            profile: action.value,
        };
    }
    return state;
};
