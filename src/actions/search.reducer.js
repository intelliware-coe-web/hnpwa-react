const initialState = {
    labelText: 'Use the input field to search for news',
    searchTerms: [],
    lastTerm: null
};

// Action Types
export const SEARCH_SUBMIT = 'SEARCH_SUBMIT';

// Action Creators
export const submitSearch = searchTerms => ({ type: SEARCH_SUBMIT, searchTerms: searchTerms });

// Reducer
const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case SEARCH_SUBMIT:
            state.searchTerms.push(action.searchTerms);
            return { ...state, 
                searchTerms: state.searchTerms.concat(action.searchTerms),
                lastTerm: action.searchTerms
            };

        default:
            return state;
    }
};

export default searchReducer;
