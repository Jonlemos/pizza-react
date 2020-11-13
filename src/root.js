import React from "react";
import { BrowserRouter, Route} from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import AutProvider from '../src/contexts/auth'
import App from './App'




const Root = () => {

  return (
  <AutProvider>    
      <CssBaseline />
      <BrowserRouter>
        <Route component={App}/>
      </BrowserRouter>
  </AutProvider>
)};

export default Root; 
