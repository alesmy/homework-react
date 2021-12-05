import {
    SEND_MESSAGE,
    GET_MESSAGES_SUCCESS,
    GET_MESSAGES_ERROR,
    GET_MESSAGES,
} from './types';

const initialState = {
    messages: {},
    messagesLoading: false,
    messagesError: null,
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.payload.id]: [
                        ...(state.messages[action.payload.id] ?? []),
                        { ...action.payload.message, id: new Date() }
                    ]
                }
            };

        case GET_MESSAGES:
            return { ...state, messagesLoading: true, messagesError: null };

        case GET_MESSAGES_SUCCESS:
            return {
                ...state,
                messagesLoading: false,
                messages: action.payload,
            };

        case GET_MESSAGES_ERROR:
            return {
                ...state,
                messagesLoading: false,
                messagesError: action.payload,
            };

        default:
            return state;
    }
}