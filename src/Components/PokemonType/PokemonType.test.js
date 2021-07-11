import { render,screen } from '@testing-library/react';
import React from 'react'
import PokemonType from './PokemonType';

describe('Pokemon Type Component',()=>{
    let type = "type test"
    beforeEach(()=>{
        render(<PokemonType type={type}/>)
    })
    test('have the right pokemon type',()=> {
        const pokemonTypeText = screen.getByText(type)
        expect(pokemonTypeText).toBeDefined()
    })
})