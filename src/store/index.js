import { createStore, combineReducers } from "redux";
import searchReducer from '../reducers/search.reducer';
import UserProfileReducer from '../reducers/UserProfileReducer';
import newsReducer from '../reducers/news.reducer';

const rootReducer = combineReducers({
    rootReducer: searchReducer, //FIXME: To be renamed
    userProfile: UserProfileReducer,
    news: newsReducer,
});

const store = createStore(rootReducer);
window.store = store;

export default store;