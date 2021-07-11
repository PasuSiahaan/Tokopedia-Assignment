import { render,screen,fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react'
import Navbar from './Navbar'

describe('Navbar Component', ()=>{
  beforeEach(() => {
    render(<MemoryRouter><Navbar /></MemoryRouter>);
  });
  test('have pokemon list link', () => {
    const pokemonListButton = screen.getByText("Pokemon List");
    expect(pokemonListButton).not.toBeNull();
    expect(pokemonListButton.href).toContain('/')
    fireEvent.click(pokemonListButton)
  });
  
  test('have my pokemon list link', () => {
      const myPokemonListButton = screen.getByText("My Pokemon List")
      expect(myPokemonListButton).not.toBeNull();
      expect(myPokemonListButton.href).toContain('/my-pokemon-list');
      fireEvent.click(myPokemonListButton)
  });

})


