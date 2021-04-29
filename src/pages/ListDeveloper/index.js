import React, { useState, useContext} from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { Container } from './styles'
import { CommonInput, CommonButton, CommonTitle } from '../../components'
import { columns } from '../../services/columns-grid'
import { DeveloperContext } from '../../contexts/DeveloperContext'

const Dashboard = () => {
    const { developersGrid, loadData, listDevelopers } = useContext(DeveloperContext)
    const [filters, setFilters] = useState({
        nome: '',
        sexo: '',
        idade: '',
        hobby: '',
        datanascimento: ''
    })

    const inputChange = (event) => setFilters({...filters, [event.target.name] : event.target.value})  

    const onSubmit = (e) => {
        e.preventDefault()
        const queryFields = ['nome', 'sexo', 'idade', 'hobby', 'datanascimento']
        let queryField = ""
        for (const field of queryFields) {
            if (filters[field]) {
                queryField += field + "=" + filters[field] + "&"
            }
        }
        listDevelopers(queryField)
    }
      
    return (
        <Container id="list">
            {!loadData && (
                <div style={{ height: 400, width: 970 }}>
                    <CommonTitle text="Listar Desenvolvedores"/>
                    <CommonInput placeholder="Nome" name="nome" onChange={inputChange} width="100px" height="30px"/>
                    <CommonInput placeholder="Sexo" name="sexo" onChange={inputChange} width="100px" height="30px"/>
                    <CommonInput placeholder="Idade" name="idade" onChange={inputChange} width="100px" height="30px"/>
                    <CommonInput placeholder="Hobby" name="hobby" onChange={inputChange} width="100px" height="30px"/>
                    <CommonInput placeholder="Data nascimento" name="datanascimento" onChange={inputChange} width="200px" height="30px"/>
                    <CommonButton onClick={onSubmit} width="100px" height="30px" text="Filtar"/>
                    <DataGrid 
                        disableSelectionOnClick
                        rows={developersGrid} 
                        columns={columns} 
                        pageSize={5} 
                    />
                </div>
            )}
        </Container>
    )
}

export default Dashboard
