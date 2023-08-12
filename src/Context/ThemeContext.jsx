import React, { createContext, useEffect, useState } from 'react'

const themes = {
  dark : {
    // backgroundColor: "rgb(0 18 31/var(--tw-bg-opacity));",
    backgroundColor: "black",
    color: "white",
  },
  light : {
    backgroundColor: "white",
    color: "black",
  },
}

const MyThemeContext = createContext()
export default function ThemeContext(props) {
  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? themes.dark : themes.light;
  const toggleTheme = () => {
    localStorage.setItem("isDark", JSON.stringify(!isDark));
    setIsDark(!isDark);
  }

  useEffect(()=>{
    const isDark = localStorage.getItem('isDark') === 'true';
    setIsDark(isDark)
  },[]);
  return (
    <div>
      <MyThemeContext.Provider value={[{ theme, isDark}, toggleTheme]}>
        {props.children}
      </MyThemeContext.Provider>
    </div>
  )
}
export {MyThemeContext}