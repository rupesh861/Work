import React,{createContext, useContext} from "react";
import { AuthContext } from "./AuthProvider";

function Login(){
    const {login} = useContext(AuthContext)
    
    const handleLogin=()=>{
        const userData ={
            name:"Kratos",
            email:"dnn@nfln"
        }
    
        login(userData);
    }

    return(
        <button onClick={handleLogin}>Log In</button>
    )

}

export default Login;