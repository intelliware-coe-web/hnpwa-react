import { connect } from 'react-redux'
import UserProfile from './UserProfile'
import { makeCat } from './actions'

const getUserProfile = (userProfile) => {
    return userProfile;
}

const mapStateToProps = state => ({
    userProfile: getUserProfile(state.userProfile)
})

const mapDispatchToProps = dispatch => {
    return {
        makeCat: username => dispatch(makeCat(username))
    }
}

const UserProfileContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserProfile)

export default UserProfileContainer