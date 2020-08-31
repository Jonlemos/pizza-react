import {createContext} from 'react'
import { auth } from 'firebase'

export const AuthContext = createContext()

const Auth = ({children}) => {
  return(
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  )
}

export default Auth
