import { render,screen } from "@testing-library/react";
import testUtils from "react-dom/test-utils";

import MyPokemon from './MyPokemon'
import React from "react";


describe('MyPokemon Component',() =>{
    let id = 1
    let pokemonName = 'pokemon name test'
    let myPokemonName = 'my pokemon name test'
    let imageUrl = 'url'
    beforeEach(() => {
        render(<MyPokemon id={id} pokemonName={pokemonName} myPokemonName={myPokemonName} imageUrl={imageUrl}/>)
      });
    test('have pokemon name',() => {
        const pokemonNameText = screen.getByText(pokemonName)
        expect(pokemonNameText).not.toBeNull();
    });
    test('have the right img url',()=>{
        const pokemonImageUrl = screen.getByAltText(pokemonName)
        expect(pokemonImageUrl.src).toContain(imageUrl);
    });
    test('have the right my pokemon name',() => {
        const myPokemonNameText = screen.getByText(myPokemonName)
        expect(myPokemonNameText).not.toBeNull();
    });
    test('have delete PopUpNotification',()=>{
        const popUpNotificationText = screen.getByText("Are you sure to delete this pokemon?")
        expect(popUpNotificationText).not.toBeNull();
    })
})



