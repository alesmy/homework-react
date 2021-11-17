import { MessageItem } from '../messageItem/MessageItem';

export function MessageList({ messages }) {
    console.log(messages);

    return (
        <ul>
            {messages.map(item => <MessageItem key={item.id} {...item} />)}
        </ul>
    )
};