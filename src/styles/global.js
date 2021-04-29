import { createGlobalStyle } from 'styled-components'

import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        outline: 0;
    }

    #root, body, input {
        font-family: 'Roboto', sans-serif;
    }
`

export default GlobalStyle