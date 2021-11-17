export function MessageItem({ text, author, id }) {

    return (
        <li className='messageBlock'>
            <div className='message'>{text}</div>
            <div className='author'>{author}</div>
        </li>
    )
}