import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import firebase from '../../services/firebase'
import { Button, Grid } from "@material-ui/core";
import { ReactComponent as MainLogo } from "./logo.svg";

import {ColorContext} from '../../App'


export default () => {
  const [userInfo, setUserInfo] = useState({
    isUserLoggedIn: false,
    user: null,
  });

  const { isUserLoggedIn, user } = userInfo;

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log("logou com:", user);
      setUserInfo({
        isUserLoggedIn: !!user,
        user,
      });
    });
  }, []);

  const login = useCallback(() => {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }, []);

  const logout = useCallback(() => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("deslog");
        setUserInfo({
          isUserLoggedIn: false,
          user: null,
        });
      });
  }, []);

  // if (!logoutFunction) {
  //   logoutFunction = logout;
  // }

  return (
    <Container>
      <Grid container justify="center" spacing={10}>
        <Grid item>
          <Logo />
        </Grid>
        <Grid item xs={12} container justify="center">
          {isUserLoggedIn && (
            <>
              <pre>{user.displayName}</pre>
              <Button variant="contained" color="primary" onClick={logout}>
                Sair
              </Button>
            </>
          )}
          {!isUserLoggedIn && (
            <>
              <FaceBookButton
              onClick={login}
              variant="contained"
              color="secondary"
              fullWidth
              >
                Entrar com Facebook
              </FaceBookButton>
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const Logo = styled(MainLogo)`
  width: 100%;
`;

const FaceBookButton = styled(Button).attrs({
  variant: "contained",
  color: "secondary",
  fullWidth: true,
})`
  && {
    font-size: 23px;
    max-width: 480px;
    padding: 15px;
    text-transform: none;
  }
`;
