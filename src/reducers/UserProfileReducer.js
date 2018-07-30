const initialState = {
    //Mock initial state
    userProfile: {
        avatar:1,
        username:'Jane Doe II',
        createdDate:'2015-06-31',
        description:'Amazing user',
        numOfStories:'5'
    }
  }

const UserProfileReducer = (state = [], action)  => {
    //Mock state until we start adding user profile data
    if (typeof state === 'undefined' || state.length === 0) {
        state = initialState;
    }

    if (action.type === 'MAKE_CAT') {
        state.userProfile.avatar++;
        console.log("make cat clicked", state.userProfile, action);
    }

    return state    
}
export default UserProfileReducer