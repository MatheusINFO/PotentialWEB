import React from 'react'
import { AddDeveloper, EditDeveloper, DeleteDeveloper, ListDeveloper } from '../../pages'
import { Header } from '../../components'

const Dashboard = () => (
    <>
        <Header/>
        <ListDeveloper/>
        <AddDeveloper />
        <EditDeveloper/>
        <DeleteDeveloper/>
    </>
)

export default Dashboard
