const initQuestion = {
    question: [],
};

export const questionReducer = (state = initQuestion, action) => {
    if (action.type === 'SET_QUESTION') {
        return {
            ...state,
            question: action.value
        };
    }
    return state;
};
