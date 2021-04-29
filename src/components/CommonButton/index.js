import React from 'react'
import { Button } from '@/styles/components'

const CommonButton = ((props) => (
    <Button type={props.type} {...props}>{props.text}</Button>
))

export default CommonButton