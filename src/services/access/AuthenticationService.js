import {Utils} from '../common/utils';
import {
    LOGIN,
} from '../../constants/AppPath';
import {BehaviorSubject} from 'rxjs';
import store from "../../reactRedux/store/store";
import {
    fetchUser,
    //updateAccess
} from "../../reactRedux/action/userAction";
import Constants from "../../constants/Constants";

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const AuthenticationService = {
    isLogin,
    restoreUserInfo,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() {
        return currentUserSubject.value
    }
};

export function authHeader() {
    // return authorization header with jwt token
    const currentUser = AuthenticationService.currentUserValue;
    //Thuc hien refresh token neu sap het han
    // console.log('currentUser-----------',currentUser)
    // _refreshToken();
    if (currentUser && currentUser.accessToken) {
        /*store.dispatch(
            updateAccess(_updateLastAccess())
        );*/
        return {Authorization: currentUser.type + " " + currentUser.accessToken};
    } else {
        return {};
    }
}

function _restoreCurrentUser(data) {
    if (data.status === 200) {
        const user = Object.assign(AuthenticationService.currentUserValue, _updateAccessTime(data.data.accessTokenExpirationSecond));
        user["accessToken"] = data.data.accessToken;
        user["refreshToken"] = data.data.refreshToken;
        localStorage.setItem('currentUser', JSON.stringify(user));
        currentUserSubject.next(user);
        //luu thong tin user vao redux
        store.dispatch(
            fetchUser(user)
        );
    }
}

function isLogin() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let nowTime = (new Date()).getTime();
    return currentUser && currentUser.accessToken && (nowTime < currentUser.validTo);
}

function _updateAccessTime(accessExpireSeconds) {
    var accessTime = {};
    var nowTime = new Date();
    nowTime.setSeconds(nowTime.getSeconds() + accessExpireSeconds);
    accessTime["validTo"] = nowTime.getTime();

    return accessTime;
}

function restoreUserInfo() {
    const currentUser = AuthenticationService.currentUserValue;
    if (currentUser && currentUser.accessToken) {
        store.dispatch(
            fetchUser(currentUser)
        );
        /*store.dispatch(
            updateAccess(_updateLastAccess())
        );*/
    }
}

function _checkRefresh() {
    let check = false;
    const uInfo = store.getState();
    let nowTime = (new Date()).getTime();
    if (uInfo && uInfo.user.info) {
        check = Math.abs(uInfo.validTo - nowTime) < 300000;
    }

    return check;
}
