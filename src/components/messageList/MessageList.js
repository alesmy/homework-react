import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { TextField, Button } from '@mui/material';
import { MessageItem } from '../messageItem/MessageItem';

export function MessageList() {

    // const { id } = useParams();

    const params = useParams();

    const [messageList] = useState({
        1: [
            { message: "hello room1", author: "User" },
            { message: "hello room1", author: "Bot" }
        ],
        2: [
            { message: "hello room2", author: "Bot" },
            { message: "hello room2", author: "User" }
        ]
    });

    const messages = messageList[params.id] ?? [];

    // const [messages, setMessages] = useState([]);
    // const [messageValue, setMessageValue] = useState('');
    // const addMessage = event => {
    //     setMessages([...messages, { id: Date.now(), text: messageValue, author: 'User', }])
    //     event.preventDefault();
    //     setMessageValue('');
    // }
    // useEffect(() => {
    //     if (messages.length && messages[messages.length - 1].author !== 'Bot') {
    //         setTimeout(() => {
    //             setMessages([
    //                 ...messages, {
    //                     id: (Date.now() + 1),
    //                     text: 'Thank you for your message!',
    //                     author: 'Bot',
    //                 }
    //             ])
    //         }, 500);
    //     }
    // }, [messages]);





    return (
        <div>

            <ul>
                {messages.map(item => <MessageItem key={item.id} {...item} />)}
            </ul>

            {/* <form onSubmit={addMessage} className="form">
                <TextField
                    fullWidth
                    autoFocus
                    id="standard-basic"
                    label="Введите Ваше сообщение..."
                    variant="standard"
                    value={messageValue}
                    onChange={event => setMessageValue(event.target.value)}
                />
                <Button type="submit">Отправить</Button>
            </form> */}


            {/* <div className='page'>
                <div className="listBlock">
                    <ChatList />
                </div>
                <div className="messageBlock"> */}
            {/* <MessageList messages={messages} /> */}
            {/* </div>
            </div> */}



            {/* {messages.map((message) => (
                <div>
                    <h1>{message.message}</h1>
                    <h1>{message.author}</h1>
                    <hr />
                </div>
            ))} */}


        </div>
    )
};