import { render,screen } from '@testing-library/react';
import React from 'react';
import MyPokemonList from './MyPokemonList'

it("renders without crashing", () => {
    window.scrollTo = jest.fn()
})

describe('My Pokemon List Component',()=> {
    beforeEach(()=>{
        render(<MyPokemonList />)
    })
    test('have the right Heading',()=>{
        const myPokemonListText = screen.getByText('My Pokemon List')
        expect(myPokemonListText).toBeDefined()
    })
    test("don't have the pokemon right now",()=>{
        const dontHavePokemonText = screen.getByText("You don't have any pokemon now")
        expect(dontHavePokemonText).toBeDefined()
    })
})