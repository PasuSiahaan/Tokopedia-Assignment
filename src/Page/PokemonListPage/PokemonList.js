import { Fragment, useState } from 'react';
import { gql, useQuery } from '@apollo/client';

import Loading from '../../Components/Loading/Loading';
import Error from '../../Components/Error/Error';
import Pokemon from '../../Components/Pokemon/Pokemon';

//import emotion
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'

import {titleCSS,loadMoreCSS,pokemonListCSS} from './PokemonListEmotion'

const GET_POKEMON_LIST = gql`
    query pokemons($limit: Int, $offset: Int) {
        pokemons(limit: $limit, offset: $offset) {
            count
            nextOffset
            prevOffset
            results {
                id
                name
                image
            }
        }
    }
`;



const PokemonList = () =>{

    const { loading, error, data , fetchMore  } = useQuery(GET_POKEMON_LIST, {
        variables: { "limit": 100, "offset":0 },
      });

    const [isLoadingMore, setIsLoadingMore] = useState(false);
      
    
    if(loading){
        return(<Loading/>)
    }
    if(error){
        return(<Error error={error.message}/>)
    }
    return(
        <Fragment>
            <h1 css={titleCSS}>Pokemon List</h1>
            <div css={pokemonListCSS}>
                {data.pokemons.results.map(pokemonData=>(
                    <Pokemon key={pokemonData.id} pokemonName={pokemonData.name} pokemonImage={pokemonData.image}/>
                ))}
            </div>
            {data.pokemons && data.pokemons.nextOffset && (isLoadingMore ? <Loading />: 
            <div css={loadMoreCSS}>
                <button onClick={async () => {
                setIsLoadingMore(true);
                fetchMore({
                    variables: {
                        offset: data.pokemons.nextOffset,
                        limit: 100
                      },
                }).then( ()=>{
                    setIsLoadingMore(false);
                })
                
                }}
            >
                Load More
            </button>
            </div>
            )}
        </Fragment>
    )
}
export default PokemonList;