import styled from "styled-components";

export const Container = styled.div`
    padding-bottom: 2rem;
    h1 {
        text-align: center;
        margin: 3rem 0;
    }
`;

export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 2rem;
    row-gap: 3rem;

    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    }
`;
export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 150px;
        border-radius: 1rem;
        margin-bottom: 1rem;
    }
    span {
        font-weight: 600;
        font-size: 120%;
        text-align: center;
    }
    a {
        transition: all ease 200ms;
    }
    a:hover {
        transform: scale(1.1);
    }
    @media screen and (max-width: 600px) {
    img{
        width: 250px;
    }
    }

`;
