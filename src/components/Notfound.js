import { useRouteError } from "react-router";

const Notfound=()=>{
 const err = useRouteError();
 console.log(err);
    return(
        <div>
            <h1>Oops! </h1>
            <h3>Something went Wrong !</h3>
            <h3>
                {err.status} :{err.statusText}
            </h3>
        </div>
    );
}

export default Notfound;