import { NavLink } from "react-router-dom";
import classes from './Menu.module.scss';

export function Menu() {
    return (
        <ol className={classes.Menu}>
            <li className={classes["Menu-item"]}>
                <NavLink
                    className={classes["Menu-link"]}
                    to="/"
                >
                    Главная
                </NavLink>
            </li>
            <li className={classes["Menu-item"]}>
                <NavLink
                    className={classes["Menu-link"]}
                    to="/other"
                >
                    Другая
                </NavLink>
            </li>
            <li className={classes["Menu-item"]}>
                <NavLink
                    className={classes["Menu-link"]}
                    to="/catalog"
                >
                    Каталог
                </NavLink>
            </li>
        </ol>
    );
}