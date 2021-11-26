import { SEND_MESSAGE } from './types';

const initialState = {
    messages: {
        'Первый чат': [{ id: new Date(), author: 'Bot', text: 'Hello to room 1' }],
        'Второй чат': [{ id: new Date(), author: 'Bot', text: 'Hello to room 2' }],
        'Третий чат': [{ id: new Date(), author: 'Bot', text: 'Hello to room 3' }],
    },
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

            }
        default:
            return state;
    }
}