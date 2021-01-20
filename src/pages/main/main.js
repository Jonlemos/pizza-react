import React, {useState, useContext} from "react";
import styled from 'styled-components'
import {AppBar, Toolbar as MaterialToolbar, IconButton, Typography, Menu, MenuItem, Grid, withStyles, Paper, Divider as MaterialDivider} from '@material-ui/core'
import {AccountCircle} from '@material-ui/icons'
import { ReactComponent as MainLogo } from "../../images/logo.svg";
import {AuthContext} from '../../contexts/auth'

export default () => {
  const [anchorElement, setAnchorElement] = useState()
  const {userInfo, logout} = useContext(AuthContext)
  const userName = userInfo.user.displayName.split(' ')[0]
  const handleOpenMenu = (e) => {
    setAnchorElement(e.target)
  }
  const handleClose = () => {
    setAnchorElement(null)
  }
  return (
    <>
      <AppBar> 
        <Toolbar>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <Typography color="inherit"> Olá {userName}</Typography>
          <IconButton color="inherit" onClick={handleOpenMenu}>
            <AccountCircle/>
          </IconButton>
          <Menu 
            open={!!anchorElement}
            onClose={handleClose}
            anchorEl={anchorElement}
          >
            <MenuItem onClick={logout}>Sair </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Spacer />

      <Content>
        <Grid container direction='column' alignItems='center'>
            <Typography variant='h3' gutterBottom> 
              O que vai ser hoje, {userName} 
            </Typography>
            <Typography variant='h4' gutterBottom>
              Escolha o tamanho da Pizza:
            </Typography>
        </Grid>
        <Grid container spacing={6} >
          {pizzaSizes.map(pizza =>(
            <Grid item key={pizza.id} xs={4}>
              <PaperPizza>
                <Pizza>
                  <PizzaText>
                    {pizza.size}cm
                  </PizzaText>
                </Pizza>
                <Divider/>
                <Typography variant='h5'>{pizza.name}</Typography>
                <Typography>{pizza.slices} fatias, {pizza.flavours} sabores</Typography>
              </PaperPizza>
            </Grid>
          ))}

        </Grid>
      </Content>
    </>
  )
};

const pizzaSizes = [
  {
    id:0,
    name:'Pequena',
    size: 28,
    slice: 2,
    flavours: 1
  },
  {
    id:1,
    name:'Média',
    size: 30,
    slice: 6,
    flavours: 2
  },
  {
    id:2,
    name:'Grande',
    size: 32,
    slice: 8,
    flavours: 3
  },
]

const Divider = styled(MaterialDivider)`
  margin:20px 0;
  width:100%;
`

const PaperPizza = styled(Paper)`
  display: flex;
  flex-direction:column;
  align-items:center;
  padding:20px 0;
`
const Pizza = styled.div`
  position:relative;
  border: 1px solid #ccc;
  border-radius: 50%;
  display:flex;
  justify-content:center;
  align-items: center;
  height:200px;
  width: 200px;

  &::before,
  &::after{
    content:'';
    background:#ccc;
    position:absolute;
    transform: rotate(45deg)
  }

  &::before{
    height:1px;
    width: 160px
  }

  &::after{
    height:160px;
    width:1px
  }
`
const PizzaText = styled(Typography).attrs({
  variant:'h5'
})`
 display:flex;
 align-items:center;
 justify-content:center;
 height:80px;
 width:80px;
 border-radius:50%;
 background: #fff;
 position:relative;
 z-index:1;
`

const Toolbar = styled(MaterialToolbar)`
  margin: 0 auto;
  max-width:960px;
  width: 100%;
`

const LogoContainer = styled.div`
  flex-grow:1;
`

const Logo = styled(MainLogo)`
  width: 200px;
  height: 50px;
`
const Content =  styled.main`
padding: 20px;
`

const style = (theme) => ({
    main: theme.mixins.toolbar
})
const Spacer = withStyles(style)(({classes}) => (
  <div className={classes.main}/>
))
