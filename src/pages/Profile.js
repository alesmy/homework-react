import { toggleShowName, profileSelector } from '../store/profile';
import { useSelector, useDispatch } from "react-redux";
import { Checkbox, FormGroup, FormControlLabel } from '@mui/material';

export function Profile() {
    const { showName, firstName, lastName } = useSelector(profileSelector);
    const dispatch = useDispatch();

    return (
        <div>
            <h3>Профиль пользователя</h3>
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Показать имя"
                    value={showName}
                    onChange={() => dispatch(toggleShowName())}
                />
            </FormGroup>
            {showName && <div><span>{firstName}</span> <span>{lastName}</span></div>}
        </div>
    );
}