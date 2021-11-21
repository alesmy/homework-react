import { } from './types';

const initialState = {
    conversations: ["Первый чат", "Второй чат", "Третий чат"]
}

export const conversationsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}