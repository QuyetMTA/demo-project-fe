import {
    GET_COMMON_USER_INFOR,
    PATH_GET_MENU,
    PATH_GET_MENU_HIDDEN
} from 'constants/AppPath';
import {Utils} from 'services/common/utils';
import Constants from '../../constants/Constants';

export const UserService = {
    getMenu,
    getUserInfor,
    getMenuHidden
};

async function getMenu() {
    let pMenu = await Utils.get(PATH_GET_MENU, {"appCode": Constants.APP_ID}, null);
    if (pMenu && pMenu.data && pMenu.data.length > 0) {
        return pMenu.data[0].items;
    }

    return null;
}

async function getMenuHidden() {
    let pMenu = await Utils.get(PATH_GET_MENU_HIDDEN, {"appCode": Constants.APP_ID}, null);
    if (pMenu && pMenu.data && pMenu.data.length > 0) {
        return pMenu.data;
    }

    return null;
}

async function getUserInfor() {
    let uInfo = await Utils.get(GET_COMMON_USER_INFOR, null, null, true);
    if (uInfo && uInfo.data)
        return uInfo.data;
    return null;
}
