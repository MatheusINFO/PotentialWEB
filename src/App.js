import React from 'react'
import {ToastContainer} from 'react-toastify';
import {BrowserRouter} from 'react-router-dom'
import DeveloperProvider from './contexts/DeveloperContext'
import { Header } from './components'
import Routes from './router/index'
import GlobalStyle from './styles/global'

function App() {
  return (
    <DeveloperProvider>
      <BrowserRouter>
        <GlobalStyle />
        <ToastContainer autoClose={1500}/>
        <Header/>
        <Routes/>
      </BrowserRouter>
    </DeveloperProvider>
  );
}

export default App;
