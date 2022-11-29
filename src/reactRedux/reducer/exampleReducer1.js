import { FETCH_EXAMPLE_SUCCESS, FETCH_EXAMPLE_FAILURE } from '../action/exampleAction1';

const initialState = {
    exampleInfo: {
        aaa: "aaa",
        bbb: "bbb"
    }
};

export default function exampleReducer(state = initialState, action) {
    switch (action.type) {

        case FETCH_EXAMPLE_SUCCESS:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
                ...state,
                exampleInfo: action.payload.ex
            };

        case FETCH_EXAMPLE_FAILURE:
            // All done: set loading "false".
            // Also, replace the items with the ones from the server
            return {
                ...state,
                exampleInfo: null
            };

        default:
            // ALWAYS have a default case in a reducer
            return state;
    }
};