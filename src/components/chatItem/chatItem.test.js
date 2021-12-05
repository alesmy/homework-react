import userEvent from "@testing-library/user-event";
import { renderWithRedux } from '../../utils/render-width-redux';
import { ChatItem } from "./ChatItem"

let state = null;

beforeEach(() => {
    state = {
        messages: {
            messages: {
                room1: [{ author: "user", text: "test" }],
                room2: [{ author: "bot", text: "test" }],
            },
        },
    };
});

describe("chat component", () => {
    it("should render ChatItem with room1 title", () => {
        const { container } = renderWithRedux(<ChatItem title="room1" />, state);

        const nodes = [...container.querySelectorAll('div')];

        expect(nodes[0]).toHaveTextContent("room1");
    });

    it("should render ChatItem with selected props", () => {
        const { getByRole } = renderWithRedux(
            <ChatItem title="room1" selected={true} />,
            state
        );

        expect(getByRole("button")).toHaveClass("Mui-selected");
    });

    it("should render ChatItem with handleListItemClick props", () => {
        const handleListItemClick = jest.fn();

        const { getByRole } = renderWithRedux(
            <ChatItem title="room1" handleListItemClick={handleListItemClick} />,
            state
        );

        userEvent.click(getByRole("button"));

        expect(handleListItemClick).toBeCalledTimes(1);
    });
});