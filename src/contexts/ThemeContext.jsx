import { createContext, useContext, useState } from "react"

const ThemeContext = createContext()
export const useThemeContext = () => useContext(ThemeContext)

function ThemeContextProvider({ children }) {
  const [availableThemes] = useState(["explorer", "tree"])
  const [theme, setTheme] = useState(availableThemes[0])

  const changeTheme = value => {
    if (availableThemes.includes(value)) {
      setTheme(value)
    }
  }

  return (
    <ThemeContext.Provider value={{ availableThemes, theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
