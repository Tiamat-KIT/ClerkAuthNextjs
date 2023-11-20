"use client"
import React from "react"

export default function ThemeChange(){
    const themeChage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.currentTarget.value as ("light" | "dark")
        if(typeof window !== "undefined"){
          if (localStorage.theme === 'dark' && value == "dark") {/* || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) */ 
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
        }
      }
    return (
        <select onChange={themeChage} id="selector-theme">
            <option value="light">
                Light
            </option>
            <option value="dark">
                Dark
            </option>
        </select>
    )
}