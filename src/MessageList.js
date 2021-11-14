import MessageItem from './MessageItem';

export default function MessageList({ messages }) {

    return (
        <ul>
            {messages.map(item => <MessageItem key={item.id} {...item} />)}
        </ul>
    )
};