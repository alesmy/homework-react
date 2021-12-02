import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { getGistsApi } from "../api/gists";
import { profileReducer } from "./profile";
import { messagesReducer } from "./messages";
import { conversationsReducer } from "./conversations";
import { gistsReducer } from "./gists";
import {
    logger,
    botSendMessage,
    timeScheduler,
    crashReporter,
    // thunk 
} from "./middlewares";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["profileStore"],
};

export const reducer = combineReducers({
    profileStore: profileReducer,
    messagesStore: messagesReducer,
    conversationsStore: conversationsReducer,
    gists: gistsReducer

});

const persistreducer = persistReducer(persistConfig, reducer);

export const store = createStore(
    persistreducer,
    compose(
        applyMiddleware(
            timeScheduler,
            crashReporter,
            botSendMessage,
            thunk.withExtraArgument({ getGistsApi }),
            logger
        ),
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : (args) => args
    )
);

export const persistor = persistStore(store);