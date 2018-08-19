//import fetch from 'cross-fetch'

// Action Types
export const USER_MAKE_CAT = 'USER_MAKE_CAT';
export const REQUEST_USER_PROFILE = 'REQUEST_USER_PROFILE';
export const RECEIVE_USER_PROFILE = 'RECEIVE_USER_PROFILE';

// Action Creators
export const makeCat = username => ({ type: USER_MAKE_CAT, username });

export const requestUserProfile = userName => ({type:REQUEST_USER_PROFILE, userName})

export const receiveUserProfile = (userName, json) => (
{
    type: RECEIVE_USER_PROFILE,
    userName,
    userProfile: mapUserProfile(json),
    receivedAt: Date.now()
}); 

function mapUserProfile(json) {
    if (!json) {
        return {
            username : null,
            createdDate : null,
            description: null,
            numOfStories: null    
        }
    }
    return {
        username : json.id,
        createdDate : json.created,
        description: json.about,
        numOfStories: json.submitted.length
    };
}

export function fetchUserProfile(userName) {
    return function (dispatch) {
        dispatch(requestUserProfile(userName));

        return fetch(`https://hacker-news.firebaseio.com/v0/user/${userName}.json`)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json =>
                dispatch(receiveUserProfile(userName, json))
            )
    }
  }