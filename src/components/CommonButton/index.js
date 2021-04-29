import React from 'react'
import { Button } from '../../styles/components'

const CommonButton = ((props) => (
    <Button data-testid="button" type={props.type} {...props}>{props.text}</Button>
))

export default CommonButton