import { css } from "@emotion/react";

export const titleCSS = css`
    text-align: center;
    text-transform: capitalize;
`

export const pokemonListCSS = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const loadMoreCSS = css`
    text-align: center;
    button {
        margin: 20px 0px;
        cursor: pointer;
        padding: 10px 20px;
        font-size: large;
        text-decoration: none;
        border: none;
        border-radius: 10px;
        background-color: #276678;
        color: white;
    }
    button:hover {
        background-color: #317c92;
    }
`