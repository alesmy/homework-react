import React, { useState, useRef, useCallback, useMemo } from 'react';
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { conversationsSelector } from '../../store/conversations';
import { List } from "@mui/material";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { ChatItem } from '../chatItem';

export function ChatList() {

    const dispatch = useDispatch();

    const conversations = useSelector(conversationsSelector);
    const params = useParams();

    console.log(conversations);

    const [value, setValue] = useState('');

    const ref = useRef(null);

    const addConversation = useCallback((conversation) => {
        if (conversation) {
            // dispatch(createConversations(conversation);
            setValue("");
        }
    },
        [dispatch]
    );


    return (
        <div>
            <List ref={ref}>
                {conversations.map((chat) => (
                    <Link key={chat} to={`/chat/${chat}`}>
                        <ChatItem title={chat} selected={params.id === chat} />
                    </Link>
                ))}
            </List>

            <Input
                fullWidth
                placeholder="Введите название чата..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                endAdornment={
                    <InputAdornment position="end">
                        {value && (<Send onClick={() => addConversation(value)} />)}
                    </InputAdornment>
                }
            />
        </div>
    );
};