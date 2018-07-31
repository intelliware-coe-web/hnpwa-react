import { SUBMIT_SEARCH } from '../constants/action-types';

const initialState = {
    labelText: 'Use the input field to search for news',
    searchTerms: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT_SEARCH:
            state.searchTerms.push(action.payload);
            return { ...state, searchTerms: state.searchTerms.concat(action.payload) };
        default:
            return state;
    }
};

export default rootReducer;