import { useContext } from "react"
import { AuthContext } from "../context/authContext"


const useCtx = () => useContext(AuthContext)

export const useSetLoginUser = useCtx().login()

