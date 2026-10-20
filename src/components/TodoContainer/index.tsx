import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { themeConfig } from "../../contexts/Theme";

interface TodoContainerProps {
    children: React.ReactNode;
}

export const TodoContainer = ({ children }: TodoContainerProps) => {

    const { theme } = useContext(ThemeContext);

    return (
        <main className={`${themeConfig[theme].layout.backgroundColor} relative min-h-screen`}>
            <div
                className={`${themeConfig[theme].layout.heroClass} absolute inset-x-0 top-0 h-80 bg-cover bg-center`}
                aria-hidden="true"
            />
            <div className="relative max-w-[43.75rem] m-auto p-6">{children}</div>
        </main >
    )
}