import {
    messagesReducer,
    sendMessage,
    getConversationsStart,
    getConversationsSuccess,
    getConversationsError,
} from "../../messages";

describe("message reducer", () => {
    it("send message", () => {
        const state = messagesReducer(
            { messages: {} },
            sendMessage({ author: "Someone", text: "Hello from someone" }, "section1")
        );

        expect(state.messages.section1.length).toBe(1);
        expect(state.messages.section1[0].author).toBe("Someone");
        expect(state.messages.section1[0].text).toBe("Hello from someone");
    });

    it("get messages start", () => {
        const state = messagesReducer(
            {
                messagesLoading: false,
                messagesError: "some error",
            },
            getConversationsStart()
        );

        expect(state.messagesLoading).toBeDefined();
        expect(state.messagesError).toBeNull();
    });

    it("get messages start success", () => {
        const MESSAGES = "test message";

        const state = messagesReducer(
            {
                messagesLoading: true,
                messages: {},
            },
            getConversationsSuccess(MESSAGES)
        );

        expect(state.messagesLoading).toBeFalsy();
        expect(state.messages).toBe(MESSAGES);
    });

    it("get messages start error", () => {
        const ERROR = "test error";

        const state = messagesReducer(
            {
                messagesLoading: true,
                messagesError: null,
            },
            getConversationsError(ERROR)
        );

        expect(state.messagesLoading).toBeFalsy();
        expect(state.messagesError).toBe(ERROR);
    });
});
