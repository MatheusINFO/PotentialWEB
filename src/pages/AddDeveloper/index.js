import React, { useContext } from 'react'
import {toast} from 'react-toastify'
import { useForm } from "react-hook-form"
import schema from './schema'
import { Form } from './styles'
import { CommonInput, CommonSelect, CommonButton, CommonTitle} from '@/components'
import { DeveloperContext } from '@/contexts/DeveloperContext'

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
            <CommonTitle text="Adicionar Desenvolvedor"/>
            <CommonInput name="nome" ref={register} placeholder="Nome"/>
            <CommonSelect name="sexo" ref={register}>
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
            </CommonSelect>
            <CommonInput type="number" min="1" name="idade" ref={register} placeholder="Idade"/>
            <CommonInput name="hobby" ref={register} placeholder="Hobby"/>
            <CommonInput type="date" name="datanascimento" ref={register}/>
            <CommonButton type="submit" text="Cadastrar"/>
        </Form>
    )
}

export default AddDeveloper