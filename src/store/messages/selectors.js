export const messagesSelector = (id) => (state) => {
    return state.messagesStore.messages[id] ?? [];
};