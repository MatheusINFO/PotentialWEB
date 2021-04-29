import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form"
import api from '../../services/api'
import { DeveloperContext } from '../../contexts/DeveloperContext'
import { Input, Select, Button, Title } from '../../styles/components'
import { Form } from './styles'

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
            <Select name="id" ref={register} defaultValue={''} onChange={findDeveloper}>
                <option value="" disabled>--Selecione--</option>
                {!loadData && developers.map((developer, count) => (
                    <option key={count} value={developer.id}>
                        {developer.nome}, {developer.idade} anos - ({developer.sexo})
                    </option>
                ))}
            </Select>

            { !load && (
                <>
                    <Input 
                        type="text" 
                        name="nome" 
                        ref={register} 
                        placeholder="Nome" 
                        value={developer.nome} 
                        onChange={e => inputChange(e)}
                    />
                    <Select 
                        name="sexo" 
                        ref={register} 
                        value={developer.sexo} 
                        onChange={e => inputChange(e)}
                    >
                        <option value="M">Masculino</option>
                        <option value="F">Feminino</option>
                    </Select>
                    <Input 
                        type="number" 
                        min="1" 
                        name="idade" 
                        ref={register} 
                        placeholder="Idade" 
                        value={developer.idade} 
                        onChange={e => inputChange(e)}
                    />
                    <Input 
                        type="text" 
                        name="hobby" 
                        ref={register} 
                        placeholder="Hobby" 
                        value={developer.hobby} 
                        onChange={e => inputChange(e)}
                    />
                    <Input 
                        type="date" 
                        name="datanascimento" 
                        ref={register} 
                        value={developer.datanascimento} 
                        onChange={e => inputChange(e)}
                    />
                    <Button type="submit">Atualizar</Button>
                </>
            )}
        </Form>
    )
}

export default EditDeveloper