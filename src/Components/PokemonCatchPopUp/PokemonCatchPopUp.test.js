import { render,screen,fireEvent } from '@testing-library/react';
import React from 'react'
import PokemonCatchPopUp from './PokemonCatchPopUp'

describe('Pokemon Catch Pop Up Component', ()=>{
    let myPokemonObject = {}
    let name = 'test'
    let imageUrl = 'imageUrl'
    beforeEach(() => {
        render(<PokemonCatchPopUp myPokemonObject={myPokemonObject}  name={name} imageUrl={imageUrl}/>)
    });
    test('have catch button',() =>{
        const catchButton = screen.getByText("Catch")
        expect(catchButton).toBeDefined()
        fireEvent.click(catchButton)
    })
})