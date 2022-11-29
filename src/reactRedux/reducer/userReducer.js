import {FETCH_USER_FAILURE, FETCH_USER_SUCCESS, UPDATE_ACCESS_SUCCESS} from '../action/userAction';

const initialState = {
    info: {
        accessToken: "",
        type: "",
        username: "",
        refreshToken: "",
        appCode: "",
        partnerCode: "",
        userId: 0,
        validTo: 1000000000000,
        lastAccess: 0
    }
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {

        case FETCH_USER_SUCCESS:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
                ...state, info: Object.assign(state.info, action.payload.user)
            };

        case FETCH_USER_FAILURE:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return state;

        case UPDATE_ACCESS_SUCCESS:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
                ...state, info: Object.assign(state.info, action.payload.accessTime)
            };

        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
}