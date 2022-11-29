export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const UPDATE_ACCESS_SUCCESS = 'UPDATE_ACCESS_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
export const FETCH_NOTIFICATION = 'FETCH_NOTIFICATION';
export const fetchUserSuccess = user => ({
    type: FETCH_USER_SUCCESS, payload: {user}
});

export const updateAccessSuccess = accessTime => ({
    type: FETCH_USER_SUCCESS, payload: {accessTime}
});

export const fetchUserFailure = error => ({
    type: FETCH_USER_FAILURE, payload: {error}
});

export const fetchNotificationSuccess = notification => ({
    type: FETCH_NOTIFICATION, payload: {notification}
});


export function fetchUser(data) {
    return async (dispatch, getState) => {
        dispatch(fetchUserSuccess(data));
    };
}

export function updateAccess(data) {
    return async (dispatch, getState) => {
        dispatch(updateAccessSuccess(data));
    };
}

export function fetchNotification(data) {
    return async (dispatch, getState) => {
        dispatch(fetchNotificationSuccess(data));
    };
}