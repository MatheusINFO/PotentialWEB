import styled from 'styled-components'

export const Container = styled.form`
    height: 100vh;
    background-image: linear-gradient(to bottom, whitesmoke, white);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 150px;
    z-index: 1;
    text-align: center;
`

export const Content = styled.div`
    height: 400px;
    width: 970px;

    @media (max-width: 1100px){
        width: 870px;

        button{
            margin-bottom: 15px;
        }
    }

    @media (max-width: 920px){
        width: 670px;
    }

    @media (max-width: 720px){
        width: 550px;
    }

    @media (max-width: 600px){
        width: 450px;
    }
`