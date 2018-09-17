const initialState = {
	details: null,
	isFetching: false,
};

// Action Types
export const REQUEST_DETAILS = 'REQUEST_DETAILS';
export const REQUEST_DETAILS_SUCCESS = 'REQUEST_DETAILS_SUCCESS';
export const REQUEST_DETAILS_FAILURE = 'REQUEST_DETAILS_FAILURE';

// Action Creators
export const requestDetails = newsItem => ({ type: REQUEST_DETAILS, id: newsItem.id });
export const requestDetailsSuccess = details => ({ type: REQUEST_DETAILS_SUCCESS, details: details });
export const requestDetailsFailure = error => ({ type: REQUEST_DETAILS_FAILURE, error: error });

// Reducer
const requestDetailsReducer = (state = initialState, action) => {
	switch (action.type) {
		case REQUEST_DETAILS:
			return {
				details: null,
				isFetching: true,
			};
		case REQUEST_DETAILS_SUCCESS:
			return {
				details: action.details,
				isFetching: false,
			};
		case REQUEST_DETAILS_FAILURE:
			return {
				details: {
					title: 'failed to fetch',
				},
				isFetching: false,
			}
		default:
			return state;
	}
}

export function fetchDetails(newsItem) {
	return function(dispatch) {
		console.log("reached here!");
		dispatch(requestDetails(newsItem));
		return fetch(`https://hacker-news.firebaseio.com/v0/item/${newsItem.id}.json`)
					.then(
						successResponse => successResponse.json(),
						errorResponse => errorResponse.json(),
					)
					.then(
						json => dispatch(requestDetailsSuccess(json)),
					);
	}
}

export default requestDetailsReducer;
