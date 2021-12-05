import { sendMessage, getConversationsStart, getConversationsSuccess, getConversationsError } from './actions';

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

export const getMessagesFB = () => (dispatch, _, api) => {
    dispatch(getConversationsStart());

    api
        .getMessagesApi()
        .then((snapshot) => {
            const messages = {};

            snapshot.forEach((snap) => {
                messages[snap.key] = Object.values(snap.val());
            });

            dispatch(getConversationsSuccess(messages));
        })
        .catch((e) => dispatch(getConversationsError(e)));
};