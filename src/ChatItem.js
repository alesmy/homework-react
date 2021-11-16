import { ListItem } from "@mui/material";

export default function ChatItem({ name, id }) {

    return (
        <ListItem>
            <div>
                <h3>{name}</h3>
            </div>
        </ListItem>
    );
}