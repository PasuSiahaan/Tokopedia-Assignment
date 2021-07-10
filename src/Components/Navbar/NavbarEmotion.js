import { css } from "@emotion/react";

export const navbarButtonCSS = css`
    :hover {
        background-color: #317c92;
    }
`
export const navbarCSS = css`
    display: flex;
    justify-content: flex-start;
    padding-bottom: 20px;
    padding-top: 16px;
    padding-left: 10px;
    z-index: 1;
    top: 0;
    background-color: #276678;
    position: fixed;
    width: 100%;
    a {
        color: white;
        padding: 0.25rem 1rem;
        margin: 0;
        text-decoration: none;
        font-size: large;
    }

`