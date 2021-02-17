import React, { lazy, Suspense, useEffect, useState, useContext } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { LinearProgress } from '@material-ui/core'
import firebase from './services/firebase'
import { AuthContext } from './contexts/auth'

import { HOME, LOGIN } from './routes'

const MainPage = lazy(() => import('./pages/main'))
const Login = lazy(() => import('./pages/login'))

const App = () => {
  const { userInfo, setUserInfo } = useContext(AuthContext)
  const [didCheckUserin, setDidCheckUserin] = useState(false)

  const { isUserLoggedIn } = userInfo
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      // eslint-disable-next-line no-console
      console.log('logou com:', user)
      setUserInfo({
        isUserLoggedIn: !!user,
        user: user && {
          ...user,
          fistName: user.displayName.split(' ')[0],
        },
      })
      setDidCheckUserin(true)
    })
  }, [setUserInfo])

  if (!didCheckUserin) {
    // eslint-disable-next-line no-console
    console.log('ainda não checou se usuário está logado')
    return <LinearProgress />
  }

  if (isUserLoggedIn && window.location.pathname === LOGIN) {
    return <Redirect to={HOME} />
  }

  if (!isUserLoggedIn && window.location.pathname !== LOGIN) {
    return <Redirect to={LOGIN} />
  }

  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path={LOGIN}>
          <Login />
        </Route>
        <Route path={HOME}>
          <MainPage />
        </Route>
      </Switch>
    </Suspense>
  )
}

export default App
