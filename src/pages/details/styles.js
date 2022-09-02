import styled from "styled-components";

export const Titulo = styled.h1`
    text-align: center;
    margin: 3rem;
`;
export const Container = styled.div`
    .movie {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }
    img {
        width: 300px;
        border-radius: 1rem;
    }
    h1 {
        margin: 2rem 0;
    }
    .detalhes {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-width: 50%;
    }
    button {
        background: #6654da;
        padding: 0.5rem 1rem;
        border-radius: 1rem;
        border: 1px solid transparent;
        margin-top: 1rem;
        color: #fff;
        text-transform: uppercase;
        cursor: pointer;
        transition: all ease 400ms;
    }
    button:hover {
        background-color: #5848c2;
    }
    span {
        line-height: 130%;
    }
    .releaseDate {
        margin-top: 1rem;
        color: #aaa;
    }
`;
