import { NavLink, useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react';
import { useTheme } from "./ThemeContext";

export default function Navbar(){
    const [logged, setLogged] = useState(false);
     const [user, setUser] = useState(null);
     const { toggletheme } = useTheme();
     const navigate = useNavigate()
   
     useEffect(() => {
       const isLoggedIn = JSON.parse(localStorage.getItem("logged"));
       const storedUser = JSON.parse(localStorage.getItem("user"));
     
       if (isLoggedIn && storedUser) {
         setLogged(true);
         setUser(storedUser);
       }
     }, []);

   
     const logout = () => {    
       localStorage.setItem("logged", false);
       setLogged(false);       
       setUser(null);
       navigate('/')
     };
    
    return (
        <div className='navbar'>
          <div><NavLink to='/'>Home</NavLink></div>
          <div><NavLink to='/Login' onClick={logout}>{!logged?("Login"):("Logout")}</NavLink></div>
          <div><NavLink to='/signup'>Signup</NavLink></div>
          <div><NavLink to='/getapi' >Get Details</NavLink></div>
          <button onClick={toggletheme}>Change Theme</button>
        </div>
    )
}

