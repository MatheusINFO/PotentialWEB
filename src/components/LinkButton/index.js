import React from 'react'
import { Link } from './styles' 

const LinkButton = ({ destiny, title, text }) => (
    <Link to={destiny} spy smooth duration={500} activeClass="activeLink" title={title}>
        {text}
    </Link>
)

export default LinkButton