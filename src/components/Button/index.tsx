import React from "react";
import style from "./Button.module.scss"

interface Props {
    children?: React.ReactNode,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: ()=> void
}

export default function Button ({ children, type ="button", onClick} : Props){
        return (
            <button 
                onClick= {onClick}
                className={style.botao}
                type={type}
            >
                {children}
            </button>
        )
}
