import styled from "styled-components"

export const StyledMessagesArea = styled.div`
    margin: 50px;
    box-shadow: 0 0 80px rgba(0,0,0,0.5);
    background-color: #fafafa;
    display: flex;
    border-radius: 6px;
    width: calc(100% - 100px);
    height: calc(100% - 100px);
    flex-direction: column;
`;

export const SentMessagesContainer = styled.div`
    flex-basis: 0px;
    flex-grow: 1;
    padding: 11px;
    overflow-y: auto;
`;

export const ChatForm = styled.form`
    flex-basis: 40px;
    display: block;
`;

export const ChatInput = styled.input`
    height: 100%;
    width: calc(100% - 20px);
    padding: 0 10px;
    border: 0;
    background-color: #eaf2f2;
    border-radius: 6px;
`;