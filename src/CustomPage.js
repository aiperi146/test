
import { useInputValue } from "./useInputValue";

export function CustomPage() {
    const firstNameProps = useInputValue('Evgeni');
    const lastNameProps = useInputValue('Dmitriev');

    return (
        <div style={{padding: 20}}>
            <input {...firstNameProps}/>
            <input {...lastNameProps}/>
            <p>Здравствуйте, {firstNameProps.value} {lastNameProps.value}</p>
        </div>
    );
}
