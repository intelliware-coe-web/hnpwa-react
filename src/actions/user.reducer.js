import {
    USER_MAKE_CAT,
    REQUEST_USER_PROFILE,
    RECEIVE_USER_PROFILE
  } from './user.action'

export const initialState = {
    //Mock initial state
    isFetching:false,
    profile: {
        avatar:undefined,
        username:'Jane Doe II',
        createdDate:'2015-06-31',
        description:'Amazing user',
        numOfStories:'5'
    }
  }

const userReducer = (state = {isFetching:false, profile:initialState.profile}, action)  => {
    if (action.type === USER_MAKE_CAT) {
        let avatarUpdated = Math.floor(Math.random()*6) + 1;
        console.log("make cat clicked", state.userProfile, action);

        return {
            profile: {
                avatar: avatarUpdated,
                username: state.profile.username,
                createdDate: state.profile.createdDate,
                description: state.profile.description,
                numOfStories: state.profile.numOfStories
            }
        }
    } else if (action.type === REQUEST_USER_PROFILE) {
        return Object.assign({}, state, {
            isFetching:true
        });
    } else if (action.type === RECEIVE_USER_PROFILE) {
        return Object.assign({}, state, {
            isFetching:false,
            profile: action.userProfile,
            lastUpdated:action.lastUpdated
        });
    } else {
        return state
    }
}
export default userReducer
