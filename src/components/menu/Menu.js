import { Link } from "react-router-dom";
import { firebaseApp } from "../../api/firebase";
import styles from "./menu.module.css";

const signOut = () => {
    firebaseApp.auth().signOut();
};

export function Menu({ session }) {

    const email = session?.email;

    return (
        <div className={styles.menu}>
            <nav>
                <Link to="/">Home</Link>
                {email && (
                    <>
                        <Link to="/profile">Profile</Link>
                        <Link to="/chat">Chat</Link>
                        <Link to="/gists">Gists</Link>
                    </>
                )}

                {!email && (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/sign-up">Sign up</Link>
                    </>
                )}

                {email && (
                    <>
                        <div style={{ color: "#fff", marginRight: '20px' }}>{email}</div>
                        <button onClick={signOut}>Выход</button>
                    </>
                )}

            </nav>
        </div>
    )
}