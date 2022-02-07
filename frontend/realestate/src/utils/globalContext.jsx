import { createContext, useContext } from "react"

//context object
export const context = createContext()

//a custom hook that wraps useContext object
export const useGlobalState = () => useContext(context)