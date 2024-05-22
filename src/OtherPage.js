import { Link, useSearchParams } from "react-router-dom";
import { Button } from "./Button";
import { useContext, useEffect, useState } from "react";
import appClasses from './App.module.scss';
import classes from './OtherPage.module.scss';
import clsx from "clsx";
import { TopBar } from "./TopBar";
import { AppContext } from "./App";

export function OtherPage() {
    const [count, setCount] = useState(0);
    const {isLight, setIsLight} = useContext(AppContext);
    const [params, setParams] = useSearchParams();
    const [user, setUser] = useState({
        name: params.get('name') || 'Айгуль',
        age: params.get('age') || 42,
    });

    useEffect(() => {
        console.log('Эффект');
        document.title = `${user.name}, нажали ${count} раз`;

        return () => {
            console.log('Ухожу в закат!');
        };
    }, [
        count,
        user.name,
    ]);

    function handleCounterClick() {
        setCount(count + 1);
    }

    function handleThemeClick() {
        setIsLight(!isLight);
    }

    function handleNumberChange(event) {
        setParams({
            ...user,
            age: event.target.value,
        });
        setUser({
            ...user,
            age: event.target.value,
        });
    }
    function handleNameChange(event) {
        setParams({
            ...user,
            name: event.target.value,
        });
        setUser({
            ...user,
            name: event.target.value,
        });
    }

    return (
        <div className={clsx([
            appClasses['App-header'],
            isLight && appClasses['App-header-light'],
        ])}>

            <TopBar/>

            <h1>Hello world</h1>
            <Button text={count} onClick={handleCounterClick}/>
            <Button text="Переключить тему" onClick={handleThemeClick}/>
            <p>Имя: {user.name}, возраст: {user.age}</p>
            <p>
                <input
                    type="number"
                    className={classes['OtherPage-input']}
                    value={user.age}
                    onChange={handleNumberChange}
                />
                <input
                    type="text"
                    className={classes['OtherPage-input']}
                    value={user.name}
                    onChange={handleNameChange}
                />
            </p>
            <p>Hello world</p>
            <p>Hello world</p>
            <p>Hello world</p>
            <Link to="/">Вернуться на главную</Link>
        </div>
    );
}