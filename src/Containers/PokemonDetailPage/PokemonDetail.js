import {useParams} from "react-router-dom";
import { gql, useQuery } from '@apollo/client';


import Loading from '../../Components/Loading';
import Error from '../../Components/Error';
import PokemonType from "../../Components/PokemonType";


//import emotion
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { Fragment } from "react";

const titleCSS = css`
    text-align: center;
    text-transform: capitalize;
`
const pokemonDetailDivCSS = css`
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
const heightAndWeightCSS = css`
    text-align: left;
    margin-top: 4px;
    span {
        font-weight: bold;
    }

`

const GET_POKEMON_DETAIL = gql`
    query pokemon($name: String!) {
        pokemon(name: $name) {
            id
            name
            height
            weight
            sprites {
                front_default
            }
            moves {
                move {
                name
                }
            }
            types {
                type {
                name
                }
            }
        }
    }
`;

const PokemonDetail = () =>{
    let { pokemonName } = useParams();
    const { loading, error, data } = useQuery(GET_POKEMON_DETAIL, {
        variables: {"name": pokemonName},
      });
    if(loading){
        return(<Loading />) 
    }
    if(data.pokemon.id === null){
        return(<Error error={`There isn't pokemon with name "${pokemonName}"`}/>)
    }
    if(error){
        return(<Error error={error.message}/>)
    }
    console.log(data)

    return (
        <Fragment>
            <h1 css={titleCSS}>{data.pokemon.name}</h1>
            <div css={pokemonDetailDivCSS}>
                <img src={data.pokemon.sprites.front_default} alt={data.pokemon.name}/>
                <div>
                    <h3>Type</h3>
                    <div className="pokemon-type-list">
                        {data.pokemon.types.map( res => (
                            <PokemonType key={res.type.name} type={res.type.name}></PokemonType>
                        ))}
                    </div>
                </div>
                <div css={heightAndWeightCSS}>
                    <div>
                        <span>Height : </span>{data.pokemon.height*10} cm
                    </div>
                    <div>
                        <span>Weight : </span>{data.pokemon.weight/10} kg
                    </div>
                </div>
                
            </div>
        </Fragment>
    )
}
export default PokemonDetail;