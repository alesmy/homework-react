import React, { useState } from 'react';
import { List } from "@mui/material";
import { ChatItem } from './ChatItem'

export default function ChatList() {
    const [chatList, setchatList] = useState(["Первый чат", "Второй чат"]);

    return (
        <List>
            <div>
                {chatList.map(item => <ChatItem key={item.id} {...item} />)}
            </div>
        </List>
    );
};