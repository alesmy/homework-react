import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGists, gistsSelector } from "../store/gists";

const buttons = Array.from({ length: 10 }).map((_, index) => index + 1);

export function Gists() {
    const { gists, gistsPending, gistsError } = useSelector(gistsSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGists());
    }, [dispatch])

    if (gistsError) {
        return <h1>Error...</h1>
    }

    return (
        <div style={{ display: "flex" }}>
            <div>
                <h1>Gists</h1>

                {buttons.map((button) => (
                    <button onClick={() => dispatch(getGists(button))} key={button}>
                        {button}
                    </button>
                ))}

                {gistsPending ? (
                    <h1>Loading ....</h1>
                ) : (
                    gists.map((gist, index) => <h3 key={index}>{gist.forks_url}</h3>)
                )}
            </div>
        </div>
    );
}