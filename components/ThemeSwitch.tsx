"use client";

import { useThemeContext } from "@/contexts/theme-context";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { ImSun } from "react-icons/im";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <button
      // className="bottom-5 right-5 flex h-[3rem] w-[3rem] items-center justify-center rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-2xl backdrop-blur-[0.5rem] transition-all hover:scale-[1.15] active:scale-105 dark:bg-gray-950"
      className="rounded-full border bg-gray-100 p-1  dark:border-gray-700 dark:bg-gray-950 dark:shadow-white"
      onClick={toggleTheme}
      title="Theme switching button"
    >
      {theme === "light" ? (
        <ImSun size={20} />
      ) : (
        <BsFillMoonStarsFill size={18} />
      )}
    </button>
  );
}
