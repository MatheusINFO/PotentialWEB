import { createContext, useEffect, useState } from 'react'
import {toast} from 'react-toastify'
import api from '../services/api'

export const DeveloperContext = createContext()

const DeveloperProvider = ({ children }) => {
    const [developers, setDevelopers] = useState()
    const [developersGrid, setDevelopersGrid] = useState()
    const [loadData, setLoadData] = useState(true)
    const [refresh,] = useState(false)

    useEffect(() => {
        api.get('/developers?').then(function (response){
            response.data.pop()
            setDevelopers(response.data)
            setDevelopersGrid(response.data)
            setLoadData(false)
        })
    }, [refresh])

    const changePage = () => {
        setTimeout(function(){
            window.location.replace('/');
        }, 1500)
    }

    const addDeveloper = (data) => {
        api.post('/developers', data).then(function (){
            toast.success("Desenvolvedor cadastrado com sucesso!")
            changePage()
        }).catch(function(error){
            toast.error("Erro ao adicionar desenvolvedor!")
        })
    }

    const deleteDeveloper = (data) => {
        api.delete(`/developers/${data.id}`).then(function (){
            toast.success("Desenvolvedor removido com sucesso!")
            changePage()
        }).catch(function(error){
            toast.error("Erro ao remover desenvolvedor!")
        })
    }

    const editDeveloper = (data) => {
        api.put(`/developers/${data.id}`, data).then(function (){
            toast.success("Desenvolvedor atualizado com sucesso!")
            changePage()
        }).catch(function(error){
            toast.error("Erro ao atualizar desenvolvedor!")
        })
    }

    const listDevelopers = (query) => {
        api.get(`/developers?${query}`).then(function (response){
            response.data.pop()
            setDevelopersGrid(response.data)
        }).catch(function(error){
            toast.error("Erro ao listar desenvolvedores!")
        })
    }

    return (
        <DeveloperContext.Provider value={{
            developers,
            developersGrid,
            loadData,
            addDeveloper,
            deleteDeveloper,
            editDeveloper,
            listDevelopers
        }}>
            {children}
        </DeveloperContext.Provider>
    )
}

export default DeveloperProvider