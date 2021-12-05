import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Layout, ChatList, MessageList } from "../components";
import { getMessagesFB } from "../store/messages";
import { getConversationsFB } from "../store/conversations";

export function Chat() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMessagesFB());
        dispatch(getConversationsFB());
    }, [dispatch]);

    return (
        <main>
            <Routes>
                <Route path="/:id" element={<Layout chats={<ChatList />} messages={<MessageList />} />} />
                <Route path="/" element={<Layout chats={<ChatList />} messages={<h1>выберите чат</h1>} />} />
            </Routes>
        </main>
    )
};