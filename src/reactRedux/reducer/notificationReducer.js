import {FETCH_NOTIFICATION} from '../action/userAction';

const initialState = {
    info: {}
};

export default function notificationReducer(state = initialState, action) {
    switch (action.type) {

        case FETCH_NOTIFICATION:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
                ...state, info: Object.assign(state.info, action.payload.notification)
            };

        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
}