import classes from './Button.module.scss';

export function Button({
    text,
    smallText,
    ...props
}) {

    return (
        <button
            className={classes.Button}
            {...props}
        >
            <strong>{text}</strong>
            <> </>
            <small>{smallText}</small>
        </button>
    );
}