export function MessageItem({ message }) {

    return (
        <div className='messageBlock'>
            <div className='message'>{message.text}</div>
            <div className='author'>{message.author}</div>
        </div>
    )
}