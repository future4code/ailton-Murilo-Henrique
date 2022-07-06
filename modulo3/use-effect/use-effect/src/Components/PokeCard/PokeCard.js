import React, { useState, useEffect } from "react";
import axios from "axios";


const PokeCard = (props) => {
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        const pegaPokemon = () => {
            axios
                .get(`https://pokeapi.co/api/v2/pokemon/${props.pokemon}`)
                .then((response) => {
                    setPokemon(response.data);
                })
                .catch((error) => {
                    alert(error);
                });
        };
        pegaPokemon();
    }, [props.pokemon]);

    return (
        <div>
            <p>Nome: {pokemon.name}</p>
            <p>Peso: {pokemon.weight} kgs</p>
            {pokemon.types && <p>Tipo: {pokemon.types[0].type.name}</p>}
            {pokemon.sprites && (
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            )}
        </div>
    );
};

export default PokeCard;
