import React from "react";
import styled from "styled-components";
import { Button, Grid } from "@material-ui/core";
import { ReactComponent as MainLogo } from "./logo.svg";

export default () => (
  <Container>
    <Grid container justify="center" spacing={10}>
      <Grid item>
        <Logo />
      </Grid>
      <Grid item xs={12}>
        <FaceBookButton variant="contained" color="secondary" fullWidth>
          Entrar com Facebook
        </FaceBookButton>
      </Grid>
    </Grid>
  </Container>
);

const Logo = styled(MainLogo)`
  width: 100%;
`;

const FaceBookButton = styled(Button)`
  && {
    font-size:20px:
    padding: 15px;
    text-transform: none;
  }
`;

const Container = styled.div`
  padding: 20px;
`;
