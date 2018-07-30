const initialState = {
    //Mock initial state
    userProfile: {
        username:'Jane Doe II',
        createdDate:'2015-06-31',
        description:'Amazing user',
        numOfStories:'5'
    }
  }

const UserProfileReducer = (state = [], action)  => {
    //Mock state until we start adding user profile data
    if (typeof state === 'undefined' || state.length === 0) {
        return initialState
    }
    return state    
}
export default UserProfileReducer