const initialState = {
    //Mock initial state
    profile: {
        avatar:undefined,
        username:'Jane Doe II',
        createdDate:'2015-06-31',
        description:'Amazing user',
        numOfStories:'5'
    }
  }


// Action Types
export const USER_MAKE_CAT = 'USER_MAKE_CAT';

// Action Creators
export const makeCat = username => ({ type: USER_MAKE_CAT, username });

const userReducer = (state = [], action)  => {
    //Mock state until we start adding user profile data
    if (typeof state === 'undefined' || state.length === 0) {
        state = initialState;
    }

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
    }

    return state
}
export default userReducer
