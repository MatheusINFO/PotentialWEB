import styled from 'styled-components'
import { Link as LinkComponent } from 'react-scroll';

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