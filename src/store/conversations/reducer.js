import { CREATE_CONVERSATIONS } from './types';

const initialState = {
    conversations: ["Первый чат", "Второй чат", "Третий чат"]
}

export const conversationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_CONVERSATIONS:
            return {
                ...state, conversations: [...state.conversations, ...action.payload.conversation]
            }
        default:
            return state;
    }
}