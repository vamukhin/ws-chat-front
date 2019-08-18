import styled from "styled-components"

export const LoginContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LoginForm = styled.form`
    width: 380px;
    height: 380px;
    background-color: white;
    border-radius: 6px;
    box-shadow: 0 0 80px rgba(0,0,0,0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`;


export const LoginHeader = styled.h1`
    margin-bottom: 50px;
`;

export const LoginInput = styled.input`
    width: 270px;
    padding: 6px;
`
