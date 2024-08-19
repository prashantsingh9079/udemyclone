import { useRouteError } from "react-router-dom";

const Error = () =>{
    const err = useRouteError();
    return(
        <div>
            <h2>Oops something went wrong</h2>
            <h3>Error Page</h3>
            <h4>Staus Code : {err.status}</h4>
            <h4>Message : {err.data}</h4>
        </div>
    )
}

export default Error;