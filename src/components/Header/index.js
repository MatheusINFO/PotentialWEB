import React from 'react'
import { Container, GazinButton, Link } from './styles' 

const Header = () => {   
    return (
        <Container>
            <Link to="list" spy smooth duration={500} activeClass="activeLink" title="Listar">
                Listar desenvolvedores
            </Link>

            <Link to="add" spy smooth duration={500} activeClass="activeLink" title="Adicionar">
                Adicionar desenvolvedor
            </Link>
            
            <GazinButton title="Sempre fazendo o melhor pra você!">
                <strong>Gazin</strong>
            </GazinButton>

            <Link to="edit" spy smooth duration={500} activeClass="activeLink" title="Editar">
                Editar desenvovledor
            </Link>

            <Link to="del" spy smooth duration={500} activeClass="activeLink" title="Deletar">
                Deletar desenvolvedor
            </Link>
        </Container>
    )
}

export default Header