import {useState, createContext, useContext} from 'react'

const ThemeContext = createContext()


const ThemProvider  = ({children}) =>{
     const [theme , setTheme] = useState("light")  

    return (
         <ThemeContext.Provider value={[theme, setTheme]}>
              {children}
         </ThemeContext.Provider>
    )
}

const useTheme = () => useContext(ThemeContext)


export {ThemProvider, useTheme}


