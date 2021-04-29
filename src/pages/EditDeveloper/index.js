import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form"
import { Form } from './styles'
import api from '../../services/api'
import { CommonInput, CommonSelect, OptionItem } from '../../components'
import { DeveloperContext } from '../../contexts/DeveloperContext'
import { Button, Title } from '../../styles/components'

const EditDeveloper = () => {
    const { developers, loadData, editDeveloper } = useContext(DeveloperContext)
    const { register, handleSubmit, watch } = useForm();
    const [developer, setDeveloper] = useState()
    const [load, setLoad] = useState(true)

    const findDeveloper = () => {
        api.get(`/developers/${watch("id")}`).then(function (response){
            setDeveloper(response.data)
            setLoad(false)
        })
    }

    const inputChange = (event) => setDeveloper({...developer, [event.target.name] : event.target.value})  

    return (
        <Form onSubmit={handleSubmit(editDeveloper)} id="edit">
            <Title>Editar Desenvolvedor</Title>
            <CommonSelect name="id" ref={register} defaultValue={''} onChange={findDeveloper}>
                <option value="" disabled>--Selecione--</option>
                {!loadData && developers.map((dev, count) => (
                     <OptionItem key={count} value={dev.id} nome={dev.nome} idade={dev.idade} sexo={dev.sexo}/>
                ))}
            </CommonSelect>

            { !load && (
                <>
                    <CommonInput name="nome" ref={register} placeholder="Nome" value={developer.nome} onChange={inputChange}/>
                    <CommonSelect name="sexo" ref={register} value={developer.sexo}  onChange={inputChange}>
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                    </CommonSelect>
                    <CommonInput type="number" min="1" name="idade" ref={register} placeholder="Idade" value={developer.idade} onChange={inputChange}/>
                    <CommonInput name="hobby" ref={register} placeholder="Hobby" value={developer.hobby} onChange={inputChange}/>
                    <CommonInput type="date" name="datanascimento" ref={register} value={developer.datanascimento} onChange={inputChange}/>
                    <Button type="submit">Atualizar</Button>
                </>
            )}
        </Form>
    )
}

export default EditDeveloper