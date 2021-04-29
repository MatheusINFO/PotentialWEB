import React from 'react'
import { Select } from '../../styles/components'

const CommonSelect = React.forwardRef ((props, ref) => (
    <Select 
        data-testid="select"
        name={props.name}
        ref={ref}
        {...props}
    >
        {props.children}
    </Select>
))

export default CommonSelect