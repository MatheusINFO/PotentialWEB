import React from 'react'
import { Link } from './styles' 

const LinkButton = ({ destiny, title, text }) => (
    <Link data-testid="link" to={destiny} title={title}>
        {text}
    </Link>
)

export default LinkButton