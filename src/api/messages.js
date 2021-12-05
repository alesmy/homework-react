import { nanoid } from "nanoid";
import { db } from "./firebase";

export const getMessagesApi = () => db.ref("messages").get();

export const sendMessageApi = ({ author, text }, id) =>
    db.ref("messages").child(id).push({ author, text, id: nanoid() });