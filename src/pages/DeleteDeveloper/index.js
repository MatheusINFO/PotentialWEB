import React, { useContext } from 'react'
import { useForm } from "react-hook-form"
import { Select, Button, Title } from '../../styles/components'
import { Form } from './styles'
import { DeveloperContext } from '../../contexts/DeveloperContext'

const DeleteDeveloper = () => {
    const { developers, loadData, deleteDeveloper } = useContext(DeveloperContext)
    const { register, handleSubmit } = useForm();

    return (
        <Form onSubmit={handleSubmit(deleteDeveloper)} id="del">
            <Title>Deletar Desenvolvedor</Title>
            <Select name="id" ref={register}>
                {!loadData && developers.map((developer, count) => (
                    <option key={count} value={developer.id}>
                        {developer.nome}, {developer.idade} anos - ({developer.sexo})
                    </option>
                ))}
            </Select>
            <Button type="submit">Deletar</Button>
        </Form>
    )
}

export default DeleteDeveloper