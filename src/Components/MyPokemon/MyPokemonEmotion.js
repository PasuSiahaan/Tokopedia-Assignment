import { css } from "@emotion/react";

export const myPokemonDiv = css`
    min-height: 100px;
    width: 300px;
    text-align: center;
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
    span {
        font-weight: bold;
    }
`