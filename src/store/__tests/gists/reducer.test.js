import {
    gistsReducer,
    gistsStart,
    gistsSuccess,
    gistsError,
} from "../../gists";

describe("gists reducer", () => {
    it("gistsStart", () => {
        const state = gistsReducer(
            {
                gistsPending: true,
                gistsError: null,
            },
            gistsStart()
        );

        expect(state.gistsPending).toBeDefined();
        expect(state.gistsError).toBeNull();
    });

    it("gistsSuccess", () => {
        const gists = "test gists";

        const state = gistsReducer(
            {
                gistsPending: false,
                gists: [],
            },
            gistsSuccess(gists)
        );

        expect(state.gistsPending).toBeFalsy();
        expect(state.gists).toBe(gists);
    });

    it("get messages start error", () => {
        const error = "test error";

        const state = gistsReducer(
            {
                gistsPending: false,
                gistsError: null,
            },
            gistsError(error)
        );

        expect(state.gistsPending).toBeFalsy();
        expect(state.gistsError).toBe(error);
    });
});