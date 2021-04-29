import React, { useState, useContext} from 'react'
import { DataGrid } from '@material-ui/data-grid';
import { Input, Button, Title } from '../../styles/components'
import { DeveloperContext } from '../../contexts/DeveloperContext'
import { Container } from './styles'

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

    const columns = [
        { field: 'id', headerName: 'ID', width: 250 },
        { field: 'nome', headerName: 'Nome', width: 130 },
        { field: 'sexo', headerName: 'Sexo', width: 130 },
        { field: 'idade', headerName: 'Idade', width: 130 },
        { field: 'hobby', headerName: 'Hobby', width: 130 },
        { field: 'datanascimento', headerName: 'Data nascimento', width: 180 }
      ];
      
    return (
        <Container id="list">
            {!loadData && (
                <div style={{ height: 400, width: 970 }}>
                    <Title>Listar desenvolvedores</Title>
                    <Input 
                        type="text"
                        placeholder="Nome" 
                        name="nome" 
                        onChange={e => inputChange(e)} 
                        width="100px" 
                        height="30px"
                    />
                    <Input 
                        type="text"
                        placeholder="Sexo" 
                        name="sexo" 
                        onChange={e => inputChange(e)} 
                        width="100px"
                        height="30px"
                     />
                    <Input 
                        type="text"
                        placeholder="Idade"
                        name="idade" 
                        onChange={e => inputChange(e)} 
                        width="100px" 
                        height="30px"
                    />
                    <Input 
                        type="text" 
                        placeholder="Hobby"
                        name="hobby" 
                        onChange={e => inputChange(e)} 
                        width="100px" 
                        height="30px"
                    />
                    <Input 
                        type="text" 
                        placeholder="Data nascimento" 
                        name="datanascimento" 
                        onChange={e => inputChange(e)} 
                        width="150px"
                        height="30px" 
                     />
                    <Button 
                        onClick={onSubmit} 
                        width="100px" 
                        height="30px"
                    >
                        Filtrar
                    </Button>
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
