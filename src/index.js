import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import MessageList from './MessageList';
import './index.css';

const App = () => {

  const [messages, setMessages] = useState([]);

  const [messageValue, setMessageValue] = useState('');
  const [authorValue, setAuthorValue] = useState('');

  const addMessage = event => {
    setMessages([
      ...messages, {
        id: Date.now(),
        text: messageValue,
        author: authorValue,
      }
    ])

    event.preventDefault();

    setMessageValue('');
    setAuthorValue('');
  }

  useEffect(() => {
    if (messages.length > 0) {
      setTimeout("alert('Ваше сообщение принято')", 500);
    }
  }, [messages]);

  return (
    <div>
      <form onSubmit={addMessage} className="form">
        <input
          type="text"
          value={authorValue}
          onChange={event => setAuthorValue(event.target.value)}
          placeholder='автор'
        />
        <textarea
          value={messageValue}
          onChange={event => setMessageValue(event.target.value)}
          placeholder='сообщение'
        />
        <input type="submit" value="Отправить" />
      </form>

      <MessageList messages={messages} />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));