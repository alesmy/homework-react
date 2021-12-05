export const conversationsSelector = (state) => state.conversationsStore.conversations;

export const messageValueSelector = (id) => (state) =>
    state.conversationsStore.conversations.find(
        (conversation) => conversation.title === id
    )?.value ?? "";