import React from "react";
import { PokemonSchema } from "../../types/PokemonSchema";
import Pokelist1 from "../Pokelist/Pokelist1";
import PokeSearchResult from "../PokeSearchResult";
import Searchbox from "../Searchbox/Searchbox";
import './Pokedex.css';

interface PokedexProps  {
    searchedPokemons: PokemonSchema[];
    selectedPokemon: PokemonSchema | undefined;
    onInputChange: (inputValue: string) => void;
    onPokemonClick: (pokemonName:string) => void;
}

const Pokedex = ({searchedPokemons, selectedPokemon,onPokemonClick, onInputChange}: PokedexProps) =>{
    return(
        <div className="pokedex-container">
            <div className="pokelist-container">
              
                <Searchbox  onInputChange={onInputChange}/>
               <Pokelist1 onPokemonClick={onPokemonClick}  searchedPokemons =  {searchedPokemons}/>

            </div>
            <div className="pokesearchresult-container">
             
                <PokeSearchResult  selectedPokemon={selectedPokemon} />

            </div>
        </div>


    )
}
export default  Pokedex;