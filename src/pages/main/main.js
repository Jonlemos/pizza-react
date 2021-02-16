import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import { withStyles } from '@material-ui/core'

import Header from './header'

const ChoozePizzaSize = lazy(() => import('../choose-pizza-size/'))
const ChoosePizzaFlavours = lazy(() => import('../choose-pizza-flavours'))

const Main = () => (
  <>
    <Header />

    <Spacer />

    <Content>
      <Suspense fallback="Loading...">
        <Switch>
          <Route path="/" component={ChoozePizzaSize} exact />
          <Route path="/sabores-da-pizza" component={ChoosePizzaFlavours} />
        </Switch>
      </Suspense>
    </Content>
  </>
)

const Content = styled.main`
  padding: 20px;
`

const style = (theme) => ({
  main: theme.mixins.toolbar,
})
const Spacer = withStyles(style)(({ classes }) => (
  <div className={classes.main} />
))

export default Main
