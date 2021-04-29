import React from 'react'
import { Select } from '@/styles/components'

const CommonSelect = React.forwardRef ((props, ref) => (
    <Select 
        name={props.name}
        ref={ref}
        {...props}
    >
        {props.children}
    </Select>
))

export default CommonSelect