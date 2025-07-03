
import { createContext,useContext,useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({children}){
    const [theme,settheme] = useState("light");

    const toggletheme = ()=>{
        settheme((theme)=>theme === "light" ? "dark" : "light")
    }

    return(
        <ThemeContext.Provider value={{theme,toggletheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme(){
    return useContext(ThemeContext);
}