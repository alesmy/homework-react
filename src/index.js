import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { TextField, Button } from '@mui/material';
import { ChatList, MessageList } from './components';
import './index.css';

const light = createTheme({
  theme: {
    color: '#fff',
  }
});

const App = () => {

  const [messages, setMessages] = useState([]);

  const [messageValue, setMessageValue] = useState('');

  const addMessage = event => {
    setMessages([...messages, { id: Date.now(), text: messageValue, author: 'User', }])

    event.preventDefault();

    setMessageValue('');
  }

  useEffect(() => {
    if (messages.length && messages[messages.length - 1].author !== 'Bot') {

      setTimeout(() => {

        setMessages([
          ...messages, {
            id: (Date.now() + 1),
            text: 'Thank you for your message!',
            author: 'Bot',
          }
        ])

      }, 500);
    }
  }, [messages]);

  return (
    <div className='page'>

      <div className="listBlock">
        <ChatList />
      </div>

      <div className="messageBlock">

        <form onSubmit={addMessage} className="form">
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
        </form>

        <MessageList messages={messages} />
      </div>
    </div>
  )
}

ReactDOM.render(
  <ThemeProvider theme={light}>
    <App />
  </ThemeProvider >,
  document.getElementById('root'));