import {createContext} from 'react'
import { auth } from 'firebase'

export const AuthContext = createContext()

const Auth = ({children}) => {
  return(
    <AuthContext.Provider value={{color, setColor}}>
      {children}
    </AuthContext.Provider>
  )
}

export default Auth
