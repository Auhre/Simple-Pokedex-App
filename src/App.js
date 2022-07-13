import NavPokemon from "./NavPokemon"
import HomePage from "./HomePage"
import PokemonIdentity from "./PokemonIdentity";
import React from "react";
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
function App() {
  document.title= "Homepage"
  const arr = [
     { id:1, pokemonName: 'Exploud' }, 
     { id:2, pokemonName: 'Tyranitar' }, 
     { id:3, pokemonName: 'Dialga' }, 
     { id:4, pokemonName: 'Kingdra' }, 
     { id:5, pokemonName: 'Charizard' }, 
     { id:6, pokemonName: 'Gengar' },
     { id:7, pokemonName: 'Garchomp' }, 
     { id:8, pokemonName: 'Rayquaza' },
     { id:9, pokemonName: 'Pikachu' },
     { id:10, pokemonName: 'Salamence' },
     { id:11, pokemonName: 'Mewtwo' },
     { id:12, pokemonName: 'Nidoking' },
    ]
 
  return (
    <>
      <NavPokemon />
      <Router> 
        <Routes>
          <Route path="/" element={<HomePage list={arr} />} />
          {arr.map(pokemon => <Route key={pokemon.pokemonName} path={`/pokemon/${pokemon.pokemonName}`} element={<PokemonIdentity />} />)}
        </Routes>
      </Router> 
    </>
  );
}

export default App;
