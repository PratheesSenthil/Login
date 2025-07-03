import React from "react"
import { useNavigate } from "react-router-dom"

export default function Home(){
    const navigate = useNavigate();
    return (
        <div style={{padding:'50px',marginLeft:'10px'}}>
        <h1>Home Page</h1>
        <button onClick={()=>{
            navigate('/login')
        }}>Login</button><br /><br />
        <button onClick={()=>{
            navigate('/signup')
        }}>SignUp</button><br /><br />
        <button>Change Theme</button><br /><br />
        </div>
    )
}