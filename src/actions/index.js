import { SUBMIT_SEARCH } from "../constants/action-types";

export const makeCat = username => ({
    type:'MAKE_CAT',
    username
})

export const submitSearch = searchTerms => ({
    type: SUBMIT_SEARCH,
    payload: searchTerms
});
