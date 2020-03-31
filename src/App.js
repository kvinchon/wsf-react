import React from 'react'
import axios from 'axios';

export default class Pokemon extends React.Component {
    state = {
      pokemons: []
    }
  
    componentDidMount() {
      axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"`)
        .then(res => {
          const pokemons = res.data.results;
          this.setState({ pokemons });
        })
    }
  
    render() {
      return (
        <div>
            <h1>Pokemon 1G</h1>
            <ul>
                { this.state.pokemons.map(pokemon => <li>{pokemon.name}</li>)}
            </ul>
        </div>
      )
    }
  }