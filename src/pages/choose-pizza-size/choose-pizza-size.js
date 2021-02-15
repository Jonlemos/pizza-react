import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  Card,
  CardActionArea as MaterialCardActionArea,
  Typography,
  Grid,
  Divider as MaterialDivider,
} from '@material-ui/core'
import { AuthContext } from '../../contexts/auth'
import pizzaSizes from '../../fake-data/pizza-sizes'

export default () => {
  const { userInfo } = useContext(AuthContext)
  return (
    <>
      <Grid container direction="column" alignItems="center">
        <Title variant="h3">O que vai ser hoje, {userInfo.user.fistName}</Title>
        <Title variant="h4">Escolha o tamanho da Pizza:</Title>
      </Grid>
      <PizzasGrid>
        {pizzaSizes.map((pizza) => (
          <Grid item key={pizza.id} xs>
            <Card>
              <CardActionArea to="/sabores-da-pizza">
                <Pizza>
                  <PizzaText>
                    {pizza.size}
                    cm
                  </PizzaText>
                </Pizza>
                <Divider />
                <Typography variant="h5">{pizza.name}</Typography>
                <Typography>
                  {pizza.slices} fatias, {pizza.flavours}{' '}
                  {
                    // eslint-disable-next-line no-use-before-define
                    singularOrPlural(pizza.flavours, 'sabor', 'sabores')
                  }
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </PizzasGrid>
    </>
  )
}

function singularOrPlural(amount, singular, plural) {
  return amount === 1 ? singular : plural
}

const Divider = styled(MaterialDivider)`
  margin: 20px 0;
  width: 100%;
`
const PizzasGrid = styled(Grid).attrs({
  container: true,
  spacing: 2,
})`
  padding: 20px;
`
const Title = styled(Typography).attrs({
  gutterBottom: true,
  align: 'center',
})``

const CardActionArea = styled(MaterialCardActionArea).attrs({
  component: Link,
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  min-width: 250px;
`
const Pizza = styled.div`
  position: relative;
  border: 1px solid #ccc;
  border-radius: 50%;
  display: flex;
  background: #fff;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  z-index: 1;

  &::before,
  &::after {
    content: '';
    background: #ccc;
    position: absolute;
    transform: rotate(45deg);
  }

  &::before {
    height: 1px;
    width: 160px;
  }

  &::after {
    height: 160px;
    width: 1px;
  }
`
const PizzaText = styled(Typography).attrs({
  variant: 'h5',
})`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background: #fff;
  position: relative;
  z-index: 1;
`
