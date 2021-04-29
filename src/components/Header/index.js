import React from 'react'
import { Container } from './styles' 
import { LinkButton } from '../index'
import Logo from '../../assets/gazin.png'

const Header = () => (
    <Container>
        <LinkButton destiny="list" title="listar" text="Listar desenvolvedores" />
        <LinkButton destiny="add" title="adicionar" text="Adicionar desenvolvedor" />
        <img src={Logo} alt="Logo gazin"/>
        <LinkButton destiny="edit" title="editar" text="Editar desenvolvedor" />
        <LinkButton destiny="del" title="deletar" text="Deletar desenvolvedor" />
    </Container>
)

export default Header