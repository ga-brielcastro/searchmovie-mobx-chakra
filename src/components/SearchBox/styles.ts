import styled from 'styled-components';

export const Input = styled.input`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    padding: 10px;
    font-size: 1rem;
    color: #fff;
    background: #575757;
    border: 0;
    border-radius: 5px;

    &::placeholder {
        color: #dedede;
    }
`;