import {
    CREATE_CONVERSATIONS,
    GET_CONVERSATIONS_SUCCESS,
    GET_CONVERSATIONS_ERROR,
    GET_CONVERSATIONS
} from './types';

export const createConversations = (conversation) => ({
    type: CREATE_CONVERSATIONS,
    payload: { conversation },
});

export const getConversationsStart = () => ({
    type: GET_CONVERSATIONS,
});

export const getConversationsSuccess = (conversations) => ({
    type: GET_CONVERSATIONS_SUCCESS,
    payload: conversations,
});

export const getConversationsError = (error) => ({
    type: GET_CONVERSATIONS_ERROR,
    payload: error,
});