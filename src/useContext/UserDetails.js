import React,{createContext, useContext} from "react";
import { AuthContext } from "./AuthProvider";

function UserDetails(){
    const {user} = useContext(AuthContext);

    if(!user){
        return <p>No user Logged In</p>
    }

    return(
        <div>
            <h2>Welcome {user.name}</h2>
            <p>Email : {user.email}</p>
        </div>
    );
}

export default UserDetails;