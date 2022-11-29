import {combineReducers} from "redux";
import user from "../reducer/userReducer";
import notification from "../reducer/notificationReducer";
import example from "../reducer/exampleReducer1";

export default combineReducers({
    user, example, notification
});