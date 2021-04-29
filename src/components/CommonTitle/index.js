import React from 'react'
import { Title } from '../../styles/components'

const CommonTitle = ((props) => (
    <Title {...props}>{props.text}</Title>
))

export default CommonTitle