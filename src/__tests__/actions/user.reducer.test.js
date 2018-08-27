import userReducer from '../../actions/user.reducer';
import { initialState } from '../../actions/user.reducer';


describe('userReducer', () => {

    it('should return the initial state', () => {
        expect(userReducer(initialState, {})).toEqual(initialState);
    });

    it('should handle USER_MAKE_CAT and update avatar property', () => {
        let state = userReducer(initialState, { type: 'USER_MAKE_CAT' });

        expect(state.profile.avatar).toBeGreaterThanOrEqual(1);
        expect(state.profile.avatar).toBeLessThanOrEqual(6);

        expect(state.profile.username).toEqual(initialState.profile.username);
        expect(state.profile.description).toEqual(initialState.profile.description);
        expect(state.profile.createdDate).toEqual(initialState.profile.createdDate);
        expect(state.profile.numOfStories).toEqual(initialState.profile.numOfStories);
    });

    it('should handle REQUEST_USER_PROFILE and update isFetching property', () => {
        let state = userReducer(initialState, { type: 'REQUEST_USER_PROFILE' });

        expect(state.isFetching).toBe(true);
    });

    it('should handle RECEIVE_USER_PROFILE and update isFetching property', () => {
        let mockUserProfile = {
            // avatar:undefined,
            username:'Jerry II',
            createdDate:'2015-06-31',
            description:'Amazing description',
            numOfStories:'7'
        };
        let mockLastUpdated = Date.now();
        let action = {
            type: 'RECEIVE_USER_PROFILE',
            userProfile: mockUserProfile,
            lastUpdated: mockLastUpdated
        };
        let state = userReducer(initialState, action);

        expect(state.isFetching).toBe(false);
        expect(state.profile).toEqual(mockUserProfile);
        expect(state.lastUpdated).toEqual(mockLastUpdated);
    });

});
