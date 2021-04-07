/* eslint-disable no-console */
/* eslint-disable react/prop-types */
// eslint-disable jsx-props-no-spreading
import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'

const Title = styled(Typography).attrs({
  gutterBottom: true,
  align: 'center',
})``

export const H3 = (props) => <Title variant="h3" {...props} />
export const H4 = (props) => <Title variant="h4" {...props} />

export default Title
