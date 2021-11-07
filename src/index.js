import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const MessageComponent = ({ message }) => {
  return <div class='message'>
    Вывод сообщения из пропса: <b>{message}</b>
  </div >
}

const App = ({ ...rest }) => {
  return (
    <div>
      <h1>Сообщение:</h1>

      <MessageComponent {...rest} />
    </div>
  )
}


ReactDOM.render(<App message={'Какой-то длинный текст...'} />, document.getElementById('root'));