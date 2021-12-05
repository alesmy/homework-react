import { SEND_MESSAGE, GET_MESSAGES_SUCCESS, GET_MESSAGES_ERROR, GET_MESSAGES, } from './types';

export const sendMessage = (message, id) => {
    return {
        type: SEND_MESSAGE,
        payload: { message, id },
        meta: {
            delay: 2000
        }
    };
}

export const getConversationsStart = () => ({
    type: GET_MESSAGES,
});

export const getConversationsSuccess = (messages) => ({
    type: GET_MESSAGES_SUCCESS,
    payload: messages,
});

export const getConversationsError = (error) => ({
    type: GET_MESSAGES_ERROR,
    payload: error,
});