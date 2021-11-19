import styles from "./layout.module.css";

export function Layout({ chats, messages }) {
    return (
        <div className={styles.chatsBody}>
            <div className={styles.chatsMenu}>{chats}</div>
            <div className={styles.chatsMessages}>{messages}</div>
        </div>
    );
}