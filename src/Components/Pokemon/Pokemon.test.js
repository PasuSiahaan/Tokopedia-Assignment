import { render,screen } from '@testing-library/react';
import React from 'react'
import Pokemon from './Pokemon';

describe('Pokemon Component',()=> {
    let pokemonName = 'pokemon name test'
    let pokemonCountList = {}
    let pokemonImage = 'imageUrlTest'
    beforeEach(() => {
        render(<Pokemon pokemonName={pokemonName}  pokemonImage={pokemonImage} pokemonCountList={pokemonCountList}/>)
      });
    test('have the right pokemon name',()=>{
        const pokemonNameText = screen.getByText(pokemonName)
        expect(pokemonNameText).not.toBeNull()
    })
    test('have the right image url',()=>{
        const pokemonImageUrl = screen.getByAltText(pokemonName)
        expect(pokemonImageUrl.src).toContain(pokemonImage)
    })
    test('have the right own number',()=>{
        const pokemonOwnText = screen.getByText('Own: 0')
        expect(pokemonOwnText).not.toBeNull()
    })
})