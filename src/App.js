import React, { lazy, Suspense, useEffect, useState, useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';
import firebase from './services/firebase';
import { AuthContext } from './contexts/auth';

const MainPage = lazy(() => import('./pages/main'));
const Login = lazy(() => import('./pages/login'));

const App = () => {
  const { userInfo, setUserInfo } = useContext(AuthContext);
  const [didCheckUserin, setDidCheckUserin] = useState(false);

  const { isUserLoggedIn } = userInfo;
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      // eslint-disable-next-line no-console
      console.log('logou com:', user);
      setUserInfo({
        isUserLoggedIn: !!user,
        user: user && {
          ...user,
          fistName: user.displayName.split(' ')[0],
        },
      });
      setDidCheckUserin(true);
    });
  }, []);

  if (!didCheckUserin) {
    // eslint-disable-next-line no-console
    console.log('ainda não checou se usuário está logado');
    return <LinearProgress />;
  }

  if (isUserLoggedIn && window.location.pathname === '/login') {
    return <Redirect to="/" />;
  }

  if (!isUserLoggedIn && window.location.pathname !== '/login') {
    return <Redirect to="./login" />;
  }

  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default App;

// import React, { lazy, Suspense} from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { CssBaseline, LinearProgress } from "@material-ui/core";

// const MainPage = lazy(() => import('./pages/main'))
// const Login = lazy(() => import('./pages/login') )

// const App = () => {

//   return (
//   <>
//       <CssBaseline />
//       <BrowserRouter>
//         <Suspense fallback ={<LinearProgress/>}>
//           <Switch>
//             <Route path="/login">
//               <Login />
//             </Route>
//             <Route path="/">
//               <MainPage />
//             </Route>
//           </Switch>
//         </Suspense>
//       </BrowserRouter>
//   </>
// )};

// export default App;
