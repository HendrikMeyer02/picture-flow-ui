import { createContext, useContext, useState } from "react"
import CheckLogin from "../auth/CheckLogin";


export const AuthWrapper = ({ children }) => {


    return (

        <>
            {children}
        </>


    )

}