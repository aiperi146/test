import { useContext } from "react";
import { Button } from "./Button";
import { AppContext } from "./App";

export function UserInfo() {
    const {
        userData: {username},
        setUserData,
    } = useContext(AppContext);

    return (
        <>
            <div style={{paddingBottom: 10}}>Logged in as {username}!</div>
            <Button
                text="Log out"
                onClick={() => {
                    setUserData({
                        username: null,
                        fullname: null,
                    });
                }}
            />
        </>
    );
}