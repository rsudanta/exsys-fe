import { combineReducers } from 'redux';
import { globalReducer } from './global';
import { statisticReducer } from './statistic';
import { questionReducer } from './question';
import { historyReducer } from './history'

const reducer = combineReducers({
    statisticReducer,
    globalReducer,
    questionReducer,
    historyReducer
});

export default reducer;
