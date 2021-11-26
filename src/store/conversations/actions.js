import { CREATE_CONVERSATIONS } from './types';

export const createConversations = (conversation) => {
    return {
        type: CREATE_CONVERSATIONS,
        payload: { conversation }
    };
}