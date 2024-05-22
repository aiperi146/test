import { AuthForm } from "./AuthForm";
import { Menu } from "./Menu";
import { UserInfo } from "./UserInfo";
import classes from './TopBar.module.scss';
import { useContext } from "react";
import { AppContext } from "./App";

export function TopBar() {
    const {
        userData: {username},
    } = useContext(AppContext);

    return (
        <header className={classes.ROOT}>
            {username ? <UserInfo/> : <AuthForm/>}
            <Menu/>
        </header>
    );
}