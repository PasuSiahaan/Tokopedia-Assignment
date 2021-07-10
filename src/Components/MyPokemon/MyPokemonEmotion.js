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
    button {
        margin-bottom: 10px;
        cursor: pointer;
        border: none;
        border-radius: 5px;
        background-color: red;
        color: white;
        padding: 10px;
    }
`

export const deleteConfirmPopUp = css`
    text-align: center;
    .yes-no-button {
        display: flex;
        justify-content: space-around;
        button {
            border: none;
            border-radius: 5px;
            padding: 10px;
            cursor: pointer;
        }
        .yes-button {
            background-color: green;
            color: white;
        }
        .no-button {
            background-color: red;
            color: white;
        }
    }
`