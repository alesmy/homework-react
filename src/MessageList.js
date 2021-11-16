import MessageItem from './MessageItem';

export default function MessageList({ messages }) {
    console.log(messages);

    return (
        <ul>
            {messages.map(item => <MessageItem key={item.id} {...item} />)}
        </ul>
    )
};