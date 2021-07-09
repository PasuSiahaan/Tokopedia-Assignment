//import emotion
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { myPokemonDiv } from './MyPokemonEmotion';

const MyPokemon = (props) => {
    return(
        <div css={myPokemonDiv}>
            <p className="pokemon-name">{props.pokemonName}</p>
            <img src={props.imageUrl} alt={props.pokemonName}/>
            <p className="pokemon-own">Name: "<span>{props.myPokemonName}</span>"</p>
        </div>
    )
}

export default MyPokemon;