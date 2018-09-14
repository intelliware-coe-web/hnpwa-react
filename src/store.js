import { createStore, combineReducers, applyMiddleware } from "redux";
import searchReducer from './actions/search.reducer';
import userReducer from './actions/user.reducer';
import newsReducer from './actions/news.reducer';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { fetchUserProfile } from './actions/user.action';

const loggerMiddleware = createLogger();

const rootReducer = combineReducers({
    search: searchReducer,
    user: userReducer,
    news: newsReducer
});

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// store.dispatch(fetchUserProfile('jl'))

window.store = store;

export default store;