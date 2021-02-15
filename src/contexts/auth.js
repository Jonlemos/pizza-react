import React, { createContext, useCallback, useState } from 'react'
import firebase from '../services/firebase'

export const AuthContext = createContext()

// eslint-disable-next-line react/prop-types
const Auth = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    isUserLoggedIn: false,
    user: null,
  })

  const login = useCallback(() => {
    const provider = new firebase.auth.GithubAuthProvider()
    firebase.auth().signInWithRedirect(provider)
  }, [])

  const logout = useCallback(() => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // eslint-disable-next-line no-console
        console.log('deslog')
        setUserInfo({
          isUserLoggedIn: false,
          user: null,
        })
      })
  }, [])

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        userInfo,
        setUserInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default Auth
