import { sendMessage } from './actions';

export const sendMessageFromBot = (message, id) => (dispatch, getState) => {
    // const cancel = dispatch(sendMessage(message, id));
    dispatch(sendMessage(message, id));

    // setTimeout(() => {
    //     cancel();
    // }, 500);

    if (message.author === "User") {
        setTimeout(() => {
            dispatch(sendMessage({ author: "Bot", text: "Hello Bot from thunk" }, id));
        }, 500);

    }
};