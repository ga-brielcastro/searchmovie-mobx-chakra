import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    top: 0;
    padding: 10px 20px;

    background: rgba(0, 0, 0, .5);
`;

export const Text = styled.h1`
    font-weight: 600;
    color: #fff;
`;