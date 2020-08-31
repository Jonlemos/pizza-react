import React, { lazy, Suspense} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CssBaseline, LinearProgress } from "@material-ui/core";

const MainPage = lazy(() => import('./pages/main'))
const Login = lazy(() => import('./pages/login') )


const App = () => {

  return (
  <>
      <CssBaseline />
      <BrowserRouter>
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
      </BrowserRouter>
  </>
)};

export default App;
