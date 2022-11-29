import { Utils } from '../../services/common/utils';

export const FETCH_EXAMPLE_SUCCESS = 'FETCH_EXAMPLE_SUCCESS';
export const FETCH_EXAMPLE_FAILURE = 'FETCH_EXAMPLE_FAILURE';

export const fetchExampleSuccess = ex => ({
    type: FETCH_EXAMPLE_SUCCESS,
    payload: { ex }
});

export const fetchExampleFailure = error => ({
    type: FETCH_EXAMPLE_FAILURE,
    payload: { error }
});

export function fetchExample(path, data, func, hasDialogProcess) {
    return async (dispatch, getState) => {
        const { exampleInfo } = getState();
        if(exampleInfo){
            return;
        } else {
            let res = await Utils.get(path, data, func, hasDialogProcess);
            if(res && res.data){
                dispatch(fetchExampleSuccess(res.data));
            }
        }
    };
}