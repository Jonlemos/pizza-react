import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MainPage } from "./pages/main";
import { Login } from "./pages/login";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <MainPage />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
