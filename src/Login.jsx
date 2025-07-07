import { useState } from "react"
import {useNavigate} from 'react-router-dom'

export default function Login(){
    const [Username,setUsername]=useState("")
    const [UserPassword,setUserPassword]=useState("")

    const [Details,setDetails]=useState(JSON.parse(localStorage.getItem('user')))

    const navigate = useNavigate()
    
    const  handleLogin=(e)=>{
        e.preventDefault(); 
        if((Details.email===Username||Details.username===Username)&& Details.password===UserPassword ){
            localStorage.setItem("logged",true)
            navigate('/')
            window.location.reload();
        }
        else{
            alert("Username or password is wrong")
        }
        setUsername("")
        setUserPassword("")  
    }
    
    
    return(
        <>
        <div style={{padding:'50px',marginLeft:'10px'}}>
            <h1>LOGIN</h1>
            <form onSubmit={handleLogin}>
                <label>Username:  </label>
                <input type="text" placeholder="Username or email" value={Username} onChange={(e)=>{setUsername(e.target.value)}} required/><br/><br/>
                <label>Password:  </label>
                <input type="password" placeholder="Password" value={UserPassword} onChange={(e)=>{setUserPassword(e.target.value)}} required/><br/><br/>
                <input type="submit" />
            </form>
        </div>
        </>
    )
}