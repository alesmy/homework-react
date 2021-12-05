import {
    CREATE_CONVERSATIONS,
    GET_CONVERSATIONS_SUCCESS,
    GET_CONVERSATIONS_ERROR,
    GET_CONVERSATIONS,
} from './types';

const initialState = {
    conversationsLoading: false,
    conversationsError: null,
    conversations: [],
};

export const conversationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_CONVERSATIONS:
            return {
                ...state, conversations: [...state.conversations, ...action.payload.conversation]
            }

        case GET_CONVERSATIONS:
            return { ...state, conversationsLoading: true, conversationsError: null };

        case GET_CONVERSATIONS_SUCCESS:
            return {
                ...state,
                conversationsLoading: false,
                conversations: action.payload,
            };

        case GET_CONVERSATIONS_ERROR:
            return {
                ...state,
                conversationsLoading: false,
                conversationsError: action.payload,
            };
        default:
            return state;
    }
};