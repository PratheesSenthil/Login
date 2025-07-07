import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Home() {
  
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const isLoggedIn = JSON.parse(localStorage.getItem("logged"));
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (isLoggedIn && storedUser) {
      setLogged(true);
      setUser(storedUser);
    }
  }, []);

  return (
    <div style={{ padding: "50px", marginLeft: "10px" }}>
      <h1>Home Page</h1>

      {!logged ? (
        <>
          <h1>Please Login</h1>
        </>
      ) : (
        <>
          <h1>Hello, {user.username}</h1>
        </>
      )}

      
    </div>
  );
}
