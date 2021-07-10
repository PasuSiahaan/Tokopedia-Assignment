import {useParams} from "react-router-dom";
import { gql, useQuery } from '@apollo/client';


import Loading from "../../Components/Loading/Loading";
import Error from '../../Components/Error/Error';
import PokemonType from "../../Components/PokemonType/PokemonType";
import PokemonCatchPopUp from "../../Components/PokemonCatchPopUp/PokemonCatchPopUp";
import PokemonMove from "../../Components/PokemonMove/PokemonMove";
import firebaseDB from "./../../FirebaseDatabaseSetting/Config"
import { useEffect, useState } from "react";

//import emotion
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Fragment } from "react";

//emotion css
import { titleCSS,heightAndWeightCSS,pokemonDetailDivCSS,typeTitleCSS,moveListCSS } from "./PokemonDetailEmotion";


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
    const [myPokemonObject,setMyPokemonObject] = useState({})

    useEffect(() => {
        window.scrollTo(0, 0);
        let isMounted = true
        firebaseDB.child('pokemon').on('value',snapshot => {
          if(isMounted){
            if(snapshot.val()!=null){
              setMyPokemonObject({
                ...snapshot.val()
              })
            }
            else{
              setMyPokemonObject({})
            }
          }
        })
        return () => {isMounted=false}
      }, [])
    const { loading, error, data } = useQuery(GET_POKEMON_DETAIL, {
        variables: {"name": pokemonName},
      });
    if(loading){
        window.scrollTo(0, 0);
        return(<Loading />) 
    }
    if(data.pokemon.id === null){
        window.scrollTo(0, 0);
        return(<Error error={`There isn't pokemon with name "${pokemonName}"`}/>)
    }
    if(error){
        window.scrollTo(0, 0);
        return(<Error error={error.message}/>)
    }
    
    return (
        <Fragment>
            <h1 css={titleCSS}>{data.pokemon.name}</h1>
            <div css={pokemonDetailDivCSS}>
                <div>
                    <img src={data.pokemon.sprites.front_default} alt={data.pokemon.name}/>
                </div>
                <div>
                    <div>
                        <h3 css={typeTitleCSS}>Type</h3>
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
            </div>
            <div css={moveListCSS}>
                <h3 css={typeTitleCSS}>Move</h3>
                <div className="pokemon-move-list">
                    {data.pokemon.moves.map( res => (
                        <PokemonMove key={res.move.name} move={res.move.name}></PokemonMove>
                    ))}
                </div>
            </div>
            <PokemonCatchPopUp name={data.pokemon.name} imageUrl={data.pokemon.sprites.front_default} myPokemonObject={myPokemonObject}/>
        </Fragment>
    )
}
export default PokemonDetail;