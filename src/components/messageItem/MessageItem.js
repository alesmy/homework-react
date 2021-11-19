// export function MessageItem({ text, author, id }) {
export function MessageItem({ text, author }) {

    return (
        <li className='messageBlock'>
            <div className='message'>{text}</div>
            <div className='author'>{author}</div>
        </li>
    )
}