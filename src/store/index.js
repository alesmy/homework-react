import { createStore, combineReducers } from "redux";
import { profileReducer } from "./profile";
import { messagesReducer } from "./messages";
import { conversationsReducer } from "./conversations";

export const store = createStore(
    combineReducers({
        profileStore: profileReducer,
        messagesStore: messagesReducer,
        conversationsStore: conversationsReducer,
    })
);

