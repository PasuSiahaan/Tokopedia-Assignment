import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

//Navbar
import Navbar from './Components/Navbar/Navbar'

//Page
import MyPokemonList from './Page/MyPokemonListPage/MyPokemonList';
import PokemonDetail from './Page/PokemonDetailPage/PokemonDetail';
import PokemonList from './Page/PokemonListPage/PokemonList';

//import emotion
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { useEffect } from 'react';

//css
const pageCSS = css`
  margin-top: 100px;
`



const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        pokemons: {
          keyArgs: false,
          merge(existing, incoming) {
            let results = [];
            if (existing && existing.results) {
              results = results.concat(existing.results);
            }
            if (incoming && incoming.results) {
              results = results.concat(incoming.results);
            }
            return {
              ...incoming,
              results
            };
          }
        }
      }
    }
  }
});

const client = new ApolloClient({
  uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
  cache: cache
});

function App() {
  useEffect( ()=> {
    document.body.style.backgroundColor = "#F6F5F5"
  }, [])
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Navbar />   
          <div css={pageCSS}>
            <Route exact path='/' component={PokemonList} /> 
            <Route exact path='/my-pokemon-list' component={MyPokemonList} /> 
            <Route exact path='/pokemon-detail/:pokemonName' component={PokemonDetail} /> 
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
