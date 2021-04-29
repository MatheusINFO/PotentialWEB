import React from 'react'
import { Input } from '../../styles/components'

const CommonInput = React.forwardRef ((props, ref) => (
    <Input 
        data-testid="input"
        type={props.type}
        placeholder={props.placeholder} 
        name={props.name}
        ref={ref}
        {...props}
    />
))

export default CommonInput