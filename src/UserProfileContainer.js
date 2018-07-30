import { connect } from 'react-redux'
import UserProfile from './UserProfile'

const getUserProfile = (userProfile) => {
    return userProfile;
}

const mapStateToProps = state => ({
    userProfile: getUserProfile(state.userProfile)
})

const mapDispatchToProps = dispatch => {
    return {
        //no actions right now
    }
}

const UserProfileContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserProfile)

export default UserProfileContainer