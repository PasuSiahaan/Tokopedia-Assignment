import {Fragment, useState, useEffect} from 'react';
import firebaseDB from './../../FirebaseDatabaseSetting/Config'

import MyPokemon from '../../Components/MyPokemon/MyPokemon';

//import emotion
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { pokemonListCSS } from './MyPokemonListEmotion';
import { titleCSS } from '../PokemonListPage/PokemonListEmotion';


const MyPokemonList = () =>{
  const [myPokemonObject,setMyPokemonObject] = useState({})
  useEffect(() => {
    window.scrollTo(0, 0);
    let isMounted = true
    firebaseDB.child('pokemon').on('value',snapshot => {
      if(snapshot.val()!=null){
        if(isMounted){
          setMyPokemonObject({
            ...snapshot.val()
          })
        }
      }
    })
    return () => {isMounted=false}
  }, [])
  return (
      <Fragment>
        <h1 css={titleCSS}>My Pokemon List</h1>
        <div css={pokemonListCSS}>
            {Object.keys(myPokemonObject).map(id=>(
                <MyPokemon key={id} pokemonName={myPokemonObject[id].pokemonName} imageUrl={myPokemonObject[id].imageUrl}  myPokemonName={myPokemonObject[id].myPokemonName}/>
            ))}
        </div>
      </Fragment>
  )
}

export default MyPokemonList;