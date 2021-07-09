import { css } from "@emotion/react";

export const catchButtonDivCSS = css`
    text-align: center;
    margin: 16px 0;
    button {
        background-color: #1e27c5;
        border: none;
        color: white;
        padding: 15px 32px;
        font-size: larger;
        border-radius: 10px;
        cursor: pointer;
        :hover {
            background-color: #2e4bd6;
        }
    }
`

export const failPopUpDivCSS = css`
    text-align: center;
    width: 100%;
    height: 100%;
    padding: 70px 0;
    h1 {
        margin: 0;
    }

`