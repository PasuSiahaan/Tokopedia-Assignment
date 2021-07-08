import { useHistory } from "react-router-dom";

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'

import { pokemonDiv } from "./PokemonEmotion";



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