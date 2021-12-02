import { Link } from "react-router-dom";
import styles from "./menu.module.css";

export function Menu() {
    return (
        <div className={styles.menu}>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/chat">Chat</Link>
                <Link to="/gists">Gists</Link>
            </nav>
        </div>
    )
}