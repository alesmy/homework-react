import { ListItem } from "@mui/material";

export function ChatItem({ title, selected, handleListItemClick }) {
    return (
        <ListItem
            button={true}
            selected={selected}
            onClick={handleListItemClick}
        >
            <div>{title}</div>
        </ListItem>
    );
}