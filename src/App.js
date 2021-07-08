import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

//Navbar
import Navbar from './Components/Navbar'

//Page
import MyPokemonList from './Containers/MyPokemonListPage/MyPokemonList';
import PokemonDetail from './Containers/PokemonDetailPage/PokemonDetail';
import PokemonList from './Containers/PokemonListPage/PokemonList';

//import emotion
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'

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
