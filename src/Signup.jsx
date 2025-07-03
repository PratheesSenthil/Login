import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Signup(){
    const [details,setdetails] = useState({
        email : "",
        username : "",
        password : ""
    })

    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault(); 
        localStorage.setItem("user",JSON.stringify(details))
        alert('Sign Up completed Please Login!..')
        navigate('/login')
    }

    return (
        <div style={{padding:'50px',marginLeft:'10px'}}>
        <h1>Signup</h1>

        <form method="post" onSubmit={handleSubmit}>

            <label>Email : <input type="email" placeholder="Email" onChange={(e)=>{
                setdetails({...details,email:e.target.value})
            }} required/></label><br/><br/>

            <label>Username : <input type="text" placeholder="Username" onChange={(e)=>{
                setdetails({...details,username:e.target.value})
            }} required/></label><br/><br/>

            <label>Password : <input type="password" placeholder="Password" onChange={(e)=>{
                setdetails({...details,password:e.target.value})
            }} required/></label><br/><br/>

            <button>Submit</button>

        </form>
        </div>
    )
}
