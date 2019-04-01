import { combineReducers } from 'redux';
import navReducer from './Navigation/reducers';
import videoReducer from './VideoList/reducers';

const rootReducer = combineReducers({
    nav: navReducer,
    videoReducer: videoReducer
});

export default rootReducer;