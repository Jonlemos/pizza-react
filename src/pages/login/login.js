import React from "react";
import styled from "styled-components";
import firebase from "firebase/app";
import "firebase/auth";
import { Button, Grid } from "@material-ui/core";
import { ReactComponent as MainLogo } from "./logo.svg";

var firebaseConfig = {
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

export default () => (
  <Container>
    <Grid container justify="center" spacing={10}>
      <Grid item>
        <Logo />
      </Grid>
      <Grid item xs={12} container justify="center">
        <FaceBookButton
          onClick={() => {
            const provider = new firebase.auth.GithubAuthProvider();
            firebase.auth().signInWithRedirect(provider);
          }}
          variant="contained"
          color="secondary"
          fullWidth
        >
          Entrar com Facebook
        </FaceBookButton>
      </Grid>
    </Grid>
  </Container>
);

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
