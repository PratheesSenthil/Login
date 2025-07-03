import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "./ThemeContext";

export default function Home() {
  const navigate = useNavigate();
  const { toggletheme } = useTheme();

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

  const logout = () => {
    localStorage.setItem("logged", false);
    setLogged(false);       
    setUser(null);
  };

  return (
    <div style={{ padding: "50px", marginLeft: "10px" }}>
      <h1>Home Page</h1>

      {!logged ? (
        <>
          <button onClick={() => navigate("/login")}>Login</button>
          <br />
          <br />
          <button onClick={() => navigate("/signup")}>SignUp</button>
          <br />
          <br />
        </>
      ) : (
        <>
          <h1>Hello, {user?.username}</h1>
          <button onClick={logout}>Logout</button>
          <br />
          <br />
        </>
      )}

      <button onClick={toggletheme}>Change Theme</button>
    </div>
  );
}
