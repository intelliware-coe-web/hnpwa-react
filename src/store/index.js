import { createStore, combineReducers } from "redux";
import searchReducer from '../reducers/index';
import UserProfileReducer from '../reducers/UserProfileReducer';
import newsReducer from '../redux/reducers/index';

const rootReducer = combineReducers({
    rootReducer: searchReducer, //FIXME: To be renamed
    userProfile: UserProfileReducer,
    news: newsReducer
});
const store = createStore(rootReducer);

export default store;