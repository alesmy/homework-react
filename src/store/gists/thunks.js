import { gistsStart, gistsSuccess, gistsError } from './actions';

export const getGists = (page = 1) => async (dispatch, getState, api) => {
    try {
        dispatch(gistsStart());
        const { data } = await api.getGistsApi(page);
        dispatch(gistsSuccess(data));
    } catch (e) {
        dispatch(gistsError(e));
    }
};