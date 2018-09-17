import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import searchReducer from './actions/search.reducer';
import userReducer from './actions/user.reducer';
import newsReducer from './actions/news.reducer';
import requestDetailsReducer from './actions/details.reducer';

const rootReducer = combineReducers({
    search: searchReducer,
    user: userReducer,
    news: newsReducer,
    details: requestDetailsReducer,
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(
    	thunkMiddleware
    )
);

window.store = store;

export default store;