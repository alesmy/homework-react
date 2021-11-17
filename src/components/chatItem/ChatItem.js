import { ListItem } from "@mui/material";

export function ChatItem({ name, id }) {

    return (
        <ListItem>
            <div>
                <h3>{name}</h3>
            </div>
        </ListItem>
    );
}