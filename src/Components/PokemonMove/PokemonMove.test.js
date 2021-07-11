import { render,screen } from '@testing-library/react';
import React from 'react'
import PokemonMove  from './PokemonMove'

describe('Pokemon Move Component',()=>{
    let move = "move test"
    beforeEach(()=>{
        render(<PokemonMove move={move} />)
    });
    test('have the right move',()=>{
        const moveText = screen.getByText(move)
        expect(moveText).toBeDefined()
    })
})