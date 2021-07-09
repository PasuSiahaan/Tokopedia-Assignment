import { Fragment, useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';

import Loading from '../../Components/Loading/Loading';
import Error from '../../Components/Error/Error';
import Pokemon from '../../Components/Pokemon/Pokemon';
import firebaseDB from '../../FirebaseDatabaseSetting/Config'

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
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [pokemonCountList, setPokemonCountList] = useState({})

    useEffect(() => {
        let isMounted = true;
        window.scrollTo(0, 0);
        firebaseDB.child('count').on('value',snapshot =>{
            if(snapshot.val()!=null) {
                if(isMounted){
                    setPokemonCountList({
                        ...snapshot.val()
                    })
                }
            }
            
        })
        return () => isMounted = false
      }, [])

    const { loading, error, data , fetchMore  } = useQuery(GET_POKEMON_LIST, {
        variables: { "limit": 100, "offset":0 },
      });

    
      
    
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
                    <Pokemon key={pokemonData.id} pokemonName={pokemonData.name} pokemonImage={pokemonData.image}  pokemonCountList={pokemonCountList}/>
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