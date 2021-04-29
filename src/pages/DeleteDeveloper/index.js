import React, { useContext } from 'react'
import { useForm } from "react-hook-form"
import { Form } from './styles'
import { OptionItem, CommonButton, CommonSelect, CommonTitle } from '../../components'
import { DeveloperContext } from '../../contexts/DeveloperContext'

const DeleteDeveloper = () => {
    const { developers, loadData, deleteDeveloper } = useContext(DeveloperContext)
    const { register, handleSubmit } = useForm();

    return (
        <Form onSubmit={handleSubmit(deleteDeveloper)} id="del">
            <CommonTitle text="Deletar Desenvolvedor"/>
            <CommonSelect name="id" ref={register}>
                {!loadData && developers.map((dev, count) => (
                    <OptionItem key={count} value={dev.id} nome={dev.nome} idade={dev.idade} sexo={dev.sexo}/>
                ))}
            </CommonSelect>
            <CommonButton type="submit" text="Deletar"/>
        </Form>
    )
}

export default DeleteDeveloper