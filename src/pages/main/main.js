import React from "react";
import {AppBar, Toolbar, IconButton, Typography, Menu, MenuItem} from '@material-ui/core'
import {AccountCircle} from '@material-ui/icons'
import { ReactComponent as MainLogo } from "../login/logo.svg";

export default () => (
  <>
    <AppBar> 
      <Toolbar>
        <MainLogo />
        <Typography color="inherit"> Olá Pessoa</Typography>
        <IconButton color="inherit">
          <AccountCircle/>
        </IconButton>
        <Menu open>
          <MenuItem>Sair </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  </>
);
