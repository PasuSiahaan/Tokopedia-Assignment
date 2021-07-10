import { css } from "@emotion/react";

export const pokemonDiv = css`
    min-height: 100px;
    width: 300px;
    text-align: center;
    cursor: pointer;
    border-style: solid;
    border-width: 1px;
    margin: 10px;
    border-radius: 25px;

    .pokemon-name {
        font-size: 30px;
        font-weight: bold;
        text-transform: capitalize;
    }
    .pokemon-own {
        font-size: 16px;
    }
    img {
        width: 130px;
    }
    :hover {
        background-color: #D3E0EA;
    }
`