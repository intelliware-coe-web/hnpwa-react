import { createStore, combineReducers } from "redux";
import searchReducer from '../reducers/index';
import UserProfileReducer from '../reducers/UserProfileReducer';

const rootReducer = combineReducers({rootReducer: searchReducer, userProfile: UserProfileReducer});
const store = createStore(rootReducer);

export default store;