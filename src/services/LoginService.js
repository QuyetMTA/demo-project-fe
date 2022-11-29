import { LOGIN } from "../constants/AppPath";
import { Utils } from "./common/utils";

export class LoginService {
    loginFunc = (data) => {
        // return Utils.post(LOGIN, data, null, true);
        return Utils.get(LOGIN, data, null, true);
    }
}