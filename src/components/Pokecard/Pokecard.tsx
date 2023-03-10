
import React from "react";
import './Pokecard.css'

interface PokecardProps {
    spriteUrl?: string;
    name: string;
    onPokemonClick:(pokemonName: string) => void;
}

const Pokecard = ({spriteUrl, name, onPokemonClick}: PokecardProps) =>{
    return(
        <div onClick={() => onPokemonClick(name)} className="pokecard">
           
            <img className="pokemon-sprite" src={spriteUrl} alt="pokemon" />
            <p>{name}</p>
        </div>

    )
}
export default Pokecard;