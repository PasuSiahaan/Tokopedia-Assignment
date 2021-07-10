import { css } from "@emotion/react";

export const catchButtonDivCSS = css`
    text-align: center;
    margin: 16px 0;
    button {
        background-color: #276678;
        border: none;
        color: white;
        padding: 15px 32px;
        font-size: large;
        border-radius: 10px;
        cursor: pointer;
        :hover {
            background-color: #317c92;
        }
    }
`

export const failPopUpDivCSS = css`
    text-align: center;
    padding: 70px 0;
    h1 {
        margin: 0;
        color: red;
    }
`
export const successPopUpDivCSS = css`
    .text-center {
        color: seagreen;
        text-align: center;
    }
    .description {
        text-align: center;
    }
    .form {
        text-align: left;
        margin: 0 0.5rem;
        padding: 0.5rem;
        border-style: solid;
        border-width: 1px;
        input {
            padding-right: 0;
        }
    }
    small {
        color: red;
    }
    .submitDiv {
        text-align:center;
        margin-top:4px;
        button {
            background-color: darkgreen;
            color: white;
            border: none;
            border-radius: 5px;
            padding: 8px 16px;
        }
    }
    
`

export const successNotificationDiv = css`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`