import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sendMessage, messagesSelector } from '../../store/messages';
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { MessageItem } from '../messageItem/MessageItem';

export function MessageList() {

    const dispatch = useDispatch();
    const { id } = useParams();

    const savedmessagesSelector = useMemo(() => messagesSelector(id), [id]);
    const messagesList = useSelector(savedmessagesSelector);

    const [value, setValue] = useState('');

    const ref = useRef(null);

    const addMessage = useCallback((text, author = "User") => {
        if (text) {
            dispatch(sendMessage({ author, text }, id));
            setValue("");
        }
    },
        [dispatch, id]
    );

    useEffect(() => {
        const lastMessage = messagesList[messagesList.length - 1];

        if (messagesList.length && lastMessage.author === "User") {
            setTimeout(() => {
                addMessage("Thank you for your message", "Bot");
            }, 500);
        }
    }, [messagesList, addMessage, id]);

    return (
        <div>
            <div ref={ref}>
                {messagesList.map((message, index) => (
                    <MessageItem key={index} message={message} />
                ))}
            </div>

            <Input
                fullWidth
                placeholder="Введите сообщение..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
                endAdornment={
                    <InputAdornment position="end">
                        {value && (<Send onClick={() => addMessage(value)} />)}
                    </InputAdornment>
                }
            />
        </div >
    )
};