export function MenuItem(props) {
    console.log(props)
    return <li {...props}>{props.text}</li>;
}