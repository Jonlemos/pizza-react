import React from 'react'
import { Grid } from '@material-ui/core'

const HeaderContent = ({ children }) => (
  <Grid container direction="column" alignItems="center">
    {children}
  </Grid>

)

export default HeaderContent
