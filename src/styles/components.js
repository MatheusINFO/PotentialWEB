import styled from 'styled-components'

export const Button = styled.button`
    background: transparent;
    width: ${props => props.width ? props.width : '310px'};
    height: ${props => props.height ? props.height : '50px'};
    border: 1px solid #2975d1;
    border-radius: 4px;
    font-size: 18px;
    color: #2975d1;
    font-weight: bold;
    transition: all 0.5s;
    cursor: pointer;

    &:hover{
        cursor: pointer;
        background: #2975d1;
        border: 1px solid #fff;
        color: #fff;
    }
`

export const Input = styled.input`
    background: transparent;
    border: 1px solid #2975d1;
    border-radius: 4px;
    font-size: 18px;
    width: ${props => props.width ? props.width : '300px'};
    height: ${props => props.height ? props.height : '50px'};
    margin: 10px;
    padding: 5px;
    color: #666;

    &::placeholder{
        color: #666;
    }

    &:focus {
        outline: none !important;
        border-color: #2975d1;
        box-shadow: 0px 0px 5px #2975d1;
    }
`

export const Select = styled.select`
    background: transparent;
    border: 1px solid #2975d1;
    border-radius: 4px;
    font-size: 18px;
    width: 310px;
    height: 60px;
    padding: 5px;
    color: #666;

    &:focus {
        outline: none !important;
        border-color: #2975d1;
        box-shadow: 0px 0px 5px #2975d1;
    }
`

export const Title = styled.h1 `
    font-size: 40px;
    margin-bottom: 40px;
    color: #2975d1;
`