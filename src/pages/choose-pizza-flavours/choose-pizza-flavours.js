/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react'
import { Redirect } from 'react-router-dom'
import { H4, HeaderContent } from '../../ui/index'
import { singularOrPlural } from '../../utils'
import { HOME } from '../../routes'

const ChoosePizzaFlavours = ({ location }) => {
  if (!location.state) {
    return <Redirect to={HOME} />
  }

  const { flavours } = location.state

  return (
    <>
      <HeaderContent>
        <H4>
          Escolha até {flavours} {''}
          {singularOrPlural(flavours, 'sabor', 'sabores')}
        </H4>
      </HeaderContent>
    </>
  )
}

export default ChoosePizzaFlavours
