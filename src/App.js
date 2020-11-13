import React, { lazy, Suspense, useEffect, useContext} from "react";
import { Route, Switch } from "react-router-dom"
import firebase from './services/firebase'
import { LinearProgress } from "@material-ui/core";
import {AuthContext} from './contexts/auth'


const MainPage = lazy(() => import('./pages/main'))
const Login = lazy(() => import('./pages/login') )


const App = () => {
  const {userInfo, setUserInfo} = useContext(AuthContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log("logou com:", user);
      setUserInfo({
        isUserLoggedIn: !!user,
        user,
      });
    });
  }, []);

  return(
    <Suspense fallback ={<LinearProgress/>}>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Suspense>
  )

}

export default App
 








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
