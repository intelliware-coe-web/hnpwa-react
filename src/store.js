import { createStore, combineReducers, applyMiddleware } from "redux";
import searchReducer from './actions/search.reducer';
import userReducer from './actions/user.reducer';
import newsReducer from './actions/news.reducer';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import requestDetailsReducer from './actions/details.reducer';

const loggerMiddleware = createLogger();

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
        thunkMiddleware,
        loggerMiddleware
    ),
);

window.store = store;

export default store;