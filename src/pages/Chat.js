import { Routes, Route } from "react-router-dom";
import { Layout, ChatList, MessageList } from "../components";

export function Chat() {

    return (
        <main>
            <Routes>
                <Route path="/:id" element={<Layout chats={<ChatList />} messages={<MessageList />} />} />
                <Route path="/" element={<Layout chats={<ChatList />} messages={<h1>выберите чат</h1>} />} />
            </Routes>
        </main>
    )
};