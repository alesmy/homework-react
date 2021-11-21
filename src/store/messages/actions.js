import { SEND_MESSAGE } from './types';

export const sendMessage = (message, id) => {
    return {
        type: SEND_MESSAGE,
        payload: { message, id }
    };
}