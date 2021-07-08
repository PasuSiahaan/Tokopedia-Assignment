import { useHistory } from "react-router-dom";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'

const pokemonDiv = css`
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
        background-color: whitesmoke;
    }
`


const Pokemon = (props) => {
    let history = useHistory();
    let pokemonOwn = getPokemonOwn();

    function getPokemonOwn(){
        
        return 0
    }

    function getPokemonDetail (pokemonName) {
        history.push(`/pokemon-detail/${pokemonName}`)
    }
    return (
        <div css={pokemonDiv} onClick={() => getPokemonDetail(props.pokemonName)}>
            <p className="pokemon-name">{props.pokemonName}</p>
            <img src={props.pokemonImage} alt={props.pokemonName}/>
            <p className="pokemon-own">Own: {pokemonOwn}</p>
        </div>
    )
}

export default Pokemon;