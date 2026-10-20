import IconSun from "/images/icon-sun.svg";
import { themeConfig } from "../../contexts/Theme";
import { ThemeContext } from "../../contexts/ThemeProvider";
import { useContext } from "react";

const TodoHeader = () => {

  const { theme, toggleTheme} = useContext(ThemeContext)

    return  (
        <>
        <header className="flex justify-between mb-6 p-5 items-center">
        <h1 className="text-white text-4x1 sm:text-[2.5rem] font-bold tracking-[1rem] ">TODO</h1>
        
        <button className="cursor-pointer" onClick={toggleTheme}>
          <img className="w-8 h-8" src={`${themeConfig[theme].icon}`} alt="Alterando Tema" />
        </button>
      </header>
        </>
    )
}

export default TodoHeader;