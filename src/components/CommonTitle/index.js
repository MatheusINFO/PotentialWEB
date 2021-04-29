import React from 'react'
import { Title } from '../../styles/components'

const CommonTitle = ((props) => (
    <Title data-testid="title" {...props}>{props.text}</Title>
))

export default CommonTitle