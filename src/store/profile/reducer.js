import { SHOW_NAME } from './types';

const initialState = {
    showName: false,
    firstName: 'Иван',
    lastName: 'Иванов',
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_NAME:
            return {
                ...state,
                showName: !state.showName
            }
        default:
            return state;
    }
}