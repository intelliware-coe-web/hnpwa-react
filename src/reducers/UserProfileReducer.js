const initialState = {
    //Mock initial state
    userProfile: {
        avatar:undefined,
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
        let avatarUpdated = Math.floor(Math.random()*6) + 1;
        console.log("make cat clicked", state.userProfile, action);

        return {
            userProfile: {
                avatar:avatarUpdated,
                username:state.userProfile.username,
                createdDate:state.userProfile.createdDate,
                description:state.userProfile.description,
                numOfStories:state.userProfile.numOfStories
            }
        }
    }

    return state
}
export default UserProfileReducer
