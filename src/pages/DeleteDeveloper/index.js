import React, { useContext } from 'react'
import { useForm } from "react-hook-form"
import { Form } from './styles'
import { OptionItem } from '../../components'
import { Select, Button, Title } from '../../styles/components'
import { DeveloperContext } from '../../contexts/DeveloperContext'

const DeleteDeveloper = () => {
    const { developers, loadData, deleteDeveloper } = useContext(DeveloperContext)
    const { register, handleSubmit } = useForm();

    return (
        <Form onSubmit={handleSubmit(deleteDeveloper)} id="del">
            <Title>Deletar Desenvolvedor</Title>
            <Select name="id" ref={register}>
                {!loadData && developers.map((dev, count) => (
                    <OptionItem key={count} value={dev.id} nome={dev.nome} idade={dev.idade} sexo={dev.sexo}/>
                ))}
            </Select>
            <Button type="submit">Deletar</Button>
        </Form>
    )
}

export default DeleteDeveloper