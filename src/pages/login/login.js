import React, { useState, useEffect } from "react";
import styled from "styled-components";
import firebase from "firebase/app";
import "firebase/auth";
import { Button, Grid } from "@material-ui/core";
import { ReactComponent as MainLogo } from "./logo.svg";

const firebaseConfig = {
  apiKey: "AIzaSyCkdWm92N6brYRoz7WGFeQxrTmdBX0_3hI",
  authDomain: "pizzariali.firebaseapp.com",
  databaseURL: "https://pizzariali.firebaseio.com",
  projectId: "pizzariali",
  storageBucket: "pizzariali.appspot.com",
  messagingSenderId: "592046647589",
  appId: "1:592046647589:web:11401a8b1db206da3d12cc",
  measurementId: "G-Z4CWHQL2NQ",
};
firebase.initializeApp(firebaseConfig);

const login = () => {
  const provider = new firebase.auth.GithubAuthProvider();
  firebase.auth().signInWithRedirect(provider);
};

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

  const logout = () => {
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
  };

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
              <Button variant="contained" onClick={logout}>
                Sair
              </Button>
            </>
          )}
          {!isUserLoggedIn && (
            <FaceBookButton
              onClick={
                login

                //   () => {
                //   const provider = new firebase.auth.GithubAuthProvider();
                //   firebase.auth().signInWithRedirect(provider);
                // }
              }
              variant="contained"
              color="secondary"
              fullWidth
            >
              Entrar com Facebook
            </FaceBookButton>
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
