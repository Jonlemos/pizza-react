import React from "react";
import { BrowserRouter, Route} from "react-router-dom";
import { CssBaseline, createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import AutProvider from '../src/contexts/auth'
import App from './App'


const theme = createMuiTheme({
    typography:{
        useNextVariants:true
    }
})

const Root = () => {

  return (
    <MuiThemeProvider theme={theme}>
        <AutProvider>    
            <CssBaseline />
            <BrowserRouter>
                <Route component={App}/>
            </BrowserRouter>
        </AutProvider>
    </MuiThemeProvider>
)};

export default Root; 
