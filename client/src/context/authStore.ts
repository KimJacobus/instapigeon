import { useState } from "react"
export interface IAuthContext {
  authed: boolean
  login(): void
  logout(): void
}
// create interface for state

export const initialContext: IAuthContext = {
  authed: true || false,
  login: () => {},
  logout: () => {},
}
// set initial values

export const useAuthStore = (): IAuthContext => {
  //can't seem to change the state here
  const [authed, setLoginUser] = useState<boolean>(false)

  const login =  ()  => {
    setLoginUser(true)
    sessionStorage.setItem("auth", "true")
  }
  function logout() {
    setLoginUser(false)
    sessionStorage.setItem("auth", "false")
  }

  return {
    authed,
    login,
    logout,
  }
}
// export hook with state
