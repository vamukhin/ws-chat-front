import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
    html, #root  {
        height: 100%;
    }

    body {
        height: 100%;
        background: linear-gradient(to top right, #7dc244, #00703c);
        font-family: monospace;
    }

    * {
        margin: 0;
        padding: 0;
    }

    button {
        border-radius: 2px;
        background-color: #f5f5f5;
        font-size: 17px;
        border: none;
        margin: 5px;
        white-space: nowrap;
        padding: 12px;
        cursor: pointer;
    }

    button:focus, input: focus {
        outline:0;
    }
    
    button:hover {
        box-shadow: inset 0px 0px 10px rgba(0,0,0,0.03);
    }

    button:active {
        
        box-shadow: inset 0px 0px 10px rgba(0,0,0,0.1);
    }
`;