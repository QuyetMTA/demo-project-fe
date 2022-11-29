import axios from 'axios';
import { AuthenticationService, authHeader } from '../access/AuthenticationService';
import { showErrorBox } from "../../components/MessageBox";
import { FTUTrans } from "../../components/ParentComponent";
import React from "react";
import { hideProgress, showProgress } from '../../components/ProgressCustom';

export const Utils = {
    get,
    getAPI,
    post,
    postAPI,
    put,
    postLogin,
    postLogout,
    _urlRender,
    _urlAPIRender,
};

async function get(path, data, func, hasDialogProcess = false) {
    let url = Utils._urlRender(path, data);
    const requestOptions = { headers: authHeader() };
    if (hasDialogProcess) {
        showProgress();
    }
    //
    if (func) {
        return axios.get(url, requestOptions).then(res => {
            if (hasDialogProcess) {
                hideProgress();
            }
            func(res)
        }).catch(error => {
            if (error && error.response && error.response.status && (error.response.status === 401 ||
                error.response.status === 403)) {
                alert(JSON.stringify(error.response));
                AuthenticationService.logout();
                //window.location.replace("/permission/" + error.response.data.code);
            } else {
                showErrorBox(<FTUTrans ns="common" name="error.common" />);
            }
            if (hasDialogProcess) {
                hideProgress();
            }
        });
    } else {
        return axios.get(url, requestOptions).then(res => {
            if (hasDialogProcess) {
                hideProgress();
            }
            return res;
        }).catch(error => {
            if (error && error.response && error.response.status && (error.response.status === 401 ||
                error.response.status === 403)) {
                alert(JSON.stringify(error.response));
                AuthenticationService.logout();
                //window.location.replace("/permission/" + error.response.data.code);
            } else {
                showErrorBox(<FTUTrans ns="common" name="error.common" />);
            }
            if (hasDialogProcess) {
                hideProgress();
            }
        });
    }
};

async function getAPI(path, data, func, hasDialogProcess = false) {
    let url = Utils._urlAPIRender(path, data);
    const requestOptions = { headers: authHeader() };
    if (hasDialogProcess) {
        showProgress();
    }
    //
    if (func) {
        return axios.get(url, requestOptions).then(res => {
            if (hasDialogProcess) {
                hideProgress();
            }
            func(res)
        }).catch(error => {
            if (error && error.response && error.response.status && (error.response.status === 401 ||
                error.response.status === 403)) {
                alert(JSON.stringify(error.response));
                AuthenticationService.logout();
                //window.location.replace("/permission/" + error.response.data.code);
            } else {
                showErrorBox(<FTUTrans ns="common" name="error.common" />);
            }
            if (hasDialogProcess) {
                hideProgress();
            }
        });
    } else {
        return axios.get(url, requestOptions).then(res => {
            if (hasDialogProcess) {
                hideProgress();
            }
            return res;
        }).catch(error => {
            if (error && error.response && error.response.status && (error.response.status === 401 ||
                error.response.status === 403)) {
                alert(JSON.stringify(error.response));
                AuthenticationService.logout();
                //window.location.replace("/permission/" + error.response.data.code);
            } else {
                showErrorBox(<FTUTrans ns="common" name="error.common" />);
            }
            if (hasDialogProcess) {
                hideProgress();
            }
        });
    }
};

async function postAPI(path, data, func, hasDialogProcess = false) {
    let url = Utils._urlAPIRender(path, null);
    const requestOptions = {
        headers: Object.assign(authHeader(),
            { 'Content-Type': 'application/json' })

    };
    if (hasDialogProcess) {
        showProgress();
    }

    //
    if (func) {
        return axios.post(url, data, requestOptions).then(res => {
            if (hasDialogProcess) {
                hideProgress();
            }
            func(res)
        }).catch(error => {
            if (error && error.response && error.response.status && (error.response.status === 401 ||
                error.response.status === 403)) {
                alert(JSON.stringify(error.response));
                AuthenticationService.logout();
                //window.location.replace("/permission/" + error.response.data.code);
            } else {
                showErrorBox(<FTUTrans ns="common" name="error.common" />);
            }
            if (hasDialogProcess) {
                hideProgress();
            }
        });
    } else {
        return axios.post(url, data, requestOptions).then(res => {
            if (hasDialogProcess) {
                hideProgress();
            }
            return res;
        }).catch(error => {
            if (error && error.response && error.response.status && (error.response.status === 401 ||
                error.response.status === 403)) {
                alert(JSON.stringify(error.response));
                AuthenticationService.logout();
                //window.location.replace("/permission/" + error.response.data.code);
            } else {
                showErrorBox(<FTUTrans ns="common" name="error.common" />);
            }
            if (hasDialogProcess) {
                hideProgress();
            }
        });
    }
};

async function post(path, data, func, hasDialogProcess = false, responseType) {
    let url = Utils._urlRender(path, null);
    const requestOptions = {
        headers: Object.assign(authHeader(),
            { 'Content-Type': 'application/json' })

    };
    if (hasDialogProcess) {
        showProgress();
    }
    if (responseType) {
        requestOptions.responseType = responseType;
    }

    //
    if (func) {
        return axios.post(url, data, requestOptions).then(res => {
            if (hasDialogProcess) {
                hideProgress();
            }
            func(res)
        }).catch(error => {
            if (error && error.response && error.response.status && (error.response.status === 401 ||
                error.response.status === 403)) {
                alert(JSON.stringify(error.response));
                AuthenticationService.logout();
                //window.location.replace("/permission/" + error.response.data.code);
            } else {
                showErrorBox(<FTUTrans ns="common" name="error.common" />);
            }
            if (hasDialogProcess) {
                hideProgress();
            }
        });
    } else {
        return axios.post(url, data, requestOptions).then(res => {
            if (hasDialogProcess) {
                hideProgress();
            }
            return res;
        }).catch(error => {
            if (error && error.response && error.response.status && (error.response.status === 401 ||
                error.response.status === 403)) {
                alert(JSON.stringify(error.response));
                AuthenticationService.logout();
                //window.location.replace("/permission/" + error.response.data.code);
            } else {
                showErrorBox(<FTUTrans ns="common" name="error.common" />);
            }
            if (hasDialogProcess) {
                hideProgress();
            }
        });
    }
};

async function put(path, data, func, hasDialogProcess = false) {
    let url = Utils._urlRender(path, null);
    const requestOptions = {
        headers: Object.assign(authHeader(),
            { 'Content-Type': 'application/json' })

    };
    if (hasDialogProcess) {
        showProgress();
    }
    //
    if (func) {
        return axios.put(url, data, requestOptions).then(res => {
            if (hasDialogProcess) {
                hideProgress();
            }
            func(res)
        }).catch(error => {
            if (error && error.response && error.response.status && (error.response.status === 401 ||
                error.response.status === 403)) {
                alert(JSON.stringify(error.response));
                AuthenticationService.logout();
                //window.location.replace("/permission/" + error.response.data.code);
            } else {
                showErrorBox(<FTUTrans ns="common" name="error.common" />);
            }
            if (hasDialogProcess) {
                hideProgress();
            }
        });
    } else {
        return axios.put(url, data, requestOptions).then(res => {
            if (hasDialogProcess) {
                hideProgress();
            }
            return res;
        }).catch(error => {
            if (error && error.response && error.response.status && (error.response.status === 401 ||
                error.response.status === 403)) {
                alert(JSON.stringify(error.response));
                AuthenticationService.logout();
                //window.location.replace("/permission/" + error.response.data.code);
            } else {
                showErrorBox(<FTUTrans ns="common" name="error.common" />);
            }
            if (hasDialogProcess) {
                hideProgress();
            }
        });
    }
};

async function postLogin(path, data, func, hasDialogProcess = false) {
    let url = Utils._urlRender(path, null);
    let config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    if (hasDialogProcess) {
        showProgress();
    }
    //
    if (func) {
        return axios.post(url, data, config).then(res => {
            if (hasDialogProcess) {
                hideProgress();
            }
            func(res)
        }).catch(error => {
            if (error && error.response && error.response.status && (error.response.status === 401 || error.response.status === 403)) {

                alert(JSON.stringify(error.response));
                AuthenticationService.logout();
            }
            if (hasDialogProcess) {
                hideProgress();
            }
            func(error.response);
        });
    } else {
        return axios.post(url, data, config).then(res => {
            if (hasDialogProcess) {
                hideProgress();
            }
            return res;
        }).catch(error => {
            if (error && error.response && error.response.status && (error.response.status === 401 ||
                error.response.status === 403)) {
                alert(JSON.stringify(error.response));
                AuthenticationService.logout();
                //window.location.replace("/permission/" + error.response.data.code);
            } else {
                showErrorBox(<FTUTrans ns="common" name="error.common" />);
            }
            if (hasDialogProcess) {
                hideProgress();
            }
        });
    }
};

async function postLogout(path, data, func, hasDialogProcess = false) {
    let url = Utils._urlRender(path, null);
    const requestOptions = {
        headers: Object.assign(authHeader(),
            { 'Content-Type': 'application/json' })

    };
    if (hasDialogProcess) {
        showProgress();
    }
    //
    if (func) {
        return axios.post(url, data, requestOptions).then(res => {
            if (hasDialogProcess) {
                hideProgress();
            }
            func(res)
        }).catch(error => {
            if (error && error.response && error.response.status && (error.response.status === 401 ||
                error.response.status === 403)) {
                //window.location.replace("/permission/" + error.response.data.code);
            } else {
                showErrorBox(<FTUTrans ns="common" name="error.common" />);
            }
            if (hasDialogProcess) {
                hideProgress();
            }
        });
    } else {
        return axios.post(url, data, requestOptions).then(res => {
            if (hasDialogProcess) {
                hideProgress();
            }
            return res;
        }).catch(error => {
            if (error && error.response && error.response.status && (error.response.status === 401 ||
                error.response.status === 403)) {
                //window.location.replace("/permission/" + error.response.data.code);
            } else {
                showErrorBox(<FTUTrans ns="common" name="error.common" />);
            }
            if (hasDialogProcess) {
                hideProgress();
            }
        });
    }
};

function _urlRender(path, data, renderDomain = true) {
    let url = renderDomain ?
        window.globalConfig.REACT_APP_URL_API + (path.indexOf('/') === 0 ? path : ('/' + path))
        :
        (path.indexOf('/') === 0 ? path : ('/' + path));
    if (data) {
        url += "?";
        url = _dataQueryRender(data, url, "").replace(/&$/, "");
    }
    return url;
};

function _urlAPIRender(path, data, renderDomain = true) {
    let url = renderDomain ?
        window.globalConfig.REACT_APP_URL_API + (path.indexOf('/') === 0 ? path : ('/' + path))
        :
        (path.indexOf('/') === 0 ? path : ('/' + path));
    if (data) {
        url += "?";
        url = _dataQueryRender(data, url, "").replace(/&$/, "");
    }
    return url;
};
function _dataQueryRender(data, url, prefix) {
    let rUrl = url;
    if (data && data.constructor === Array) {
        for (var key in data) {
            if (data[key] && data[key].constructor === Object) {
                rUrl += _dataQueryRender(data[key], "", (prefix ? prefix + "[" + key + "]" : key));
            } else {
                rUrl += (prefix ? prefix + "[" + key + "]" : key) + "=" + ((data[key] !== undefined && data[key] !== null) ? encodeURI(data[key]) : "") + "&";
            }
        }
    } else if (data) {
        for (let key in data) {
            if (data[key] && data[key].constructor === Object) {
                rUrl += _dataQueryRender(data[key], "", (prefix ? prefix + "." + key : key));
            } else if (data[key] && data[key].constructor === Array) {
                rUrl += _dataQueryRender(data[key], "", (prefix ? prefix + "." + key : key));
            } else {
                rUrl += (prefix ? prefix + "." + key : key) + "=" + ((data[key] !== undefined && data[key] !== null) ? encodeURI(data[key]) : "") + "&";
            }
        }
    }

    return rUrl;
}

