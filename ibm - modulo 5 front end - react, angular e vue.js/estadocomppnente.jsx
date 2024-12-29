import React, {usestate} from "React";
import App from "./src/App";
const statemanagement = () => {
    const[name, state] = usestate('juan');
    return (
        <>
            <h1> state management esta sendo usado pelo usestate</h1>
            <p>o nome e {juan}</p>
        </>
    )
}

export default statemanagement;
