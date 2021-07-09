import { css } from "@emotion/react";

export const titleCSS = css`
    text-align: center;
    text-transform: capitalize;
`
export const pokemonDetailDivCSS = css`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 300px;
    }
    .pokemon-type-list {
        display: flex;

    }
`
export const heightAndWeightCSS = css`
    text-align: left;
    margin: 1rem 0;
    span {
        font-weight: bold;
    }

`
export const typeTitleCSS = css`
    margin-top: 0px;
    margin-bottom: 1rem;
`

export const moveListCSS = css`
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    .pokemon-move-list {
        display: flex;
        flex-wrap: wrap;
        width: 300px;
        border-style: solid;
        border-width: 1px;
        border-radius: 4px;
        padding: 10px;
        justify-content: space-evenly;
    }
`