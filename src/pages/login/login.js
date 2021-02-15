import React, { useContext } from 'react'
import styled from 'styled-components'
import { Button, Grid } from '@material-ui/core'
import { ReactComponent as MainLogo } from '../../images/logo.svg'
import { AuthContext } from '../../contexts/auth'

export default () => {
  const { login } = useContext(AuthContext)

  return (
    <Container>
      <Grid container justify="center" spacing={5}>
        <Grid item>
          <Logo />
        </Grid>
        <Grid item xs={12} container justify="center">
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
        </Grid>
      </Grid>
    </Container>
  )
}

const Container = styled.div`
  padding: 20px;
`

const Logo = styled(MainLogo)`
  width: 100%;
`

const FaceBookButton = styled(Button).attrs({
  variant: 'contained',
  color: 'secondary',
  fullWidth: true,
})`
  && {
    font-size: 23px;
    max-width: 480px;
    padding: 15px;
    text-transform: none;
  }
`
