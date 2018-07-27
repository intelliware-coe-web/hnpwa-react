import { SUBMIT_SEARCH } from "../constants/action-types";

export const submitSearch = searchTerms => ({
    type: SUBMIT_SEARCH,
    payload: searchTerms
});