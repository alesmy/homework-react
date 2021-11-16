import React, { useState } from 'react';
import { List } from "@mui/material";
// import ChatItem from './ChatItem'
import { ChatItem } from '../chatItem';

export default function ChatList() {
    const [chats, setChats] = useState([
        { id: 1223456, name: "Первый чат" },
        { id: 5554452, name: "Второй чат" }
    ]);

    return (
        <List>
            {chats.map(item => <ChatItem key={item.id} {...item} />)}
        </List>
    );
};