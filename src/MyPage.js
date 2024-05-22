import { useCallback, useMemo, useState } from "react";
import  Copyright  from "./Copyright";
import classes from "./MyPage.module.css";
import clsx from "clsx";

export function MyPage() {
    const [isDark, setIsDark] = useState(true);
    const [name, setName] = useState('Evgeni');

    const firstYear = 2023;

    const years = useMemo(
        () => {
            return [firstYear, 2024];
        },

        [firstYear],
    );

    const handleNameClick = useMemo(
        () => (() => (alert('Your name is ' + name))),
        [name],
    );

    const handleNameClick2 = useCallback(
        () => (alert('Your name is ' + name)),
        [name],
    );

    return (
        <div className={clsx([
            classes.ROOT,
            isDark && classes.dark
        ])}>
            <h1>Hello world</h1>

            <p>
                <input
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                />
            </p>

            <p>
                <label>
                    <input
                        type="checkbox"
                        checked={isDark}
                        onChange={() => {
                            setIsDark(!isDark);
                        }}
                    />
                    dark theme
                </label>
            </p>

            <Copyright
                name={name}
                years={years}
                nameOnclick={handleNameClick2}
            />
        </div>
    );
}