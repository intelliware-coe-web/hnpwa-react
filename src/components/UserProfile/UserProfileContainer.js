import { connect } from 'react-redux'
import UserProfile from './UserProfile'
import { makeCat } from '../../actions/user.reducer';

const mapStateToProps = state => ({
    userProfile: state.user.profile
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