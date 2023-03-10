import React from "react";
import { PokemonSchema } from "../../types/PokemonSchema";
import Pokecard from "../Pokecard/Pokecard";
import './Pokelist.css';


interface PokelistProps {
    searchedPokemons: PokemonSchema[];
    onPokemonClick:  (pokemonName: string) => void;
}

const Pokelist1 = ({searchedPokemons, onPokemonClick}: PokelistProps) =>{
    return(
        <div className="pokelist">
            {
                searchedPokemons.map((pokemon) =>{
                    return(
                        pokemon.name && (
                            <Pokecard onPokemonClick={onPokemonClick} key={pokemon.id} name={pokemon.name} spriteUrl={pokemon.sprites?.normal} />

                        )

                  
                    );
            })}
           
           

        </div>

    )
}
export default Pokelist1;