import React, { useContext } from 'react'
import {toast} from 'react-toastify'
import { useForm } from "react-hook-form"
import { DeveloperContext } from '../../contexts/DeveloperContext'
import { Input, Select, Button, Title } from '../../styles/components'
import { Form } from './styles'
import schema from './schema'

const AddDeveloper = () => {
    const { addDeveloper } = useContext(DeveloperContext)
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        schema.validate(data).then(function(){
            addDeveloper(data)
        }).catch(function(error){
            toast.error(error.message)
        })
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)} id="add">
            <Title>Adicionar Desenvolvedor</Title>
            <Input type="text" name="nome" ref={register} placeholder="Nome"/>
            <Select name="sexo" ref={register}>
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
            </Select>
            <Input type="number" min="1" name="idade" ref={register} placeholder="Idade"/>
            <Input type="text" name="hobby" ref={register} placeholder="Hobby"/>
            <Input type="date" name="datanascimento" ref={register} />
            <Button type="submit">Cadastrar</Button>
        </Form>
    )
}

export default AddDeveloper