import styled from 'styled-components'
import { Link as LinkComponent } from 'react-scroll';

export const Container = styled.div`
    background: #fff;
    border-bottom: 1px solid #2975d1;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    position: fixed;
    top:0;
    left: 0;
    z-index: 10;

    strong{
        background: #2975d1;
        padding: 12px;
        border-radius: 8px 15px;
        color: #fff;
        font-size: 30px;
    }
`

export const GazinButton = styled.button`
    background: none;
    border: 0;
    transition: all 0.2s;

    &:hover{
        transform: scale(1.1);
    }
`

export const Link = styled(LinkComponent)`
    cursor: pointer;
    background: transparent;
    color: #2975d1;
    border: 1px solid #2975d1;
    border-radius: 4px;
    padding: 10px;
    font-weight: bold;
    transition: all 0.5s;

    &:hover{
        cursor: pointer;
        background: #2975d1;
        border: 1px solid #fff;
        color: #fff;
    }
`;