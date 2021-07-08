import { css } from "@emotion/react";
import styled from '@emotion/styled'



const pokemonTypeCSS = props => css`
    background-color: ${props.pokemonTypeColor};
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
    margin-right: 3px;
    text-align: center;
    padding-bottom: 3px;
    text-transform: capitalize;
    padding: 0.5px 12px;
    cursor: context-menu;
    p {
        margin: 0;
    }
`

export const Container = styled.div`
  ${pokemonTypeCSS};
`