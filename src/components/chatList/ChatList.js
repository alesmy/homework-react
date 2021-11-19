import React, { useState } from 'react';
import { Link, useParams } from "react-router-dom";
import { List } from "@mui/material";
import { ChatItem } from '../chatItem';

export function ChatList() {
    const [chats] = useState(["Первый чат", "Второй чат", "Третий чат"]);
    const params = useParams();

    return (
        <List>
            {chats.map((chat, index) => (
                <Link key={chat} to={`/chat/${chat}`}>
                    <ChatItem title={chat} selected={params.id === chat} />
                </Link>
            ))}
        </List>
    );
};