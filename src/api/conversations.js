import { db } from "./firebase";

export const getConversationsApi = () => db.ref("conversations").get();

export const updateConversationsApi = (value, id) =>
    db.ref("conversations").child(id).update({ value, title: id });

export const addConversation = (value) => {
    return db.ref("conversations").child(value).set({ title: value, value: "" });
};
