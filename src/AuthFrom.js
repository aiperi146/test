import { Button } from "./Button";
import classes from './AuthForm.module.scss';
import { useContext, useRef } from "react";
import { AppContext } from "./App";

export function AuthForm() {
    const {
        setUserData,
    } = useContext(AppContext);

    const usernameInputElem = useRef(null);
    const fullnameInputElem = useRef(null);

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            setUserData({
                username: usernameInputElem.current.value,
                fullname: fullnameInputElem.current.value,
            });
        }}>
            <input
                ref={usernameInputElem}
                className={classes.Input}
                name="username"
                placeholder="user name"
                required
            />
            <input
                ref={fullnameInputElem}
                className={classes.Input}
                name="fullname"
                placeholder="full name"
                required
            />
            <Button text="Log in" />
        </form>
    );
}