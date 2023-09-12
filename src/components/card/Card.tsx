import React from "react";
import axios from "axios";
import './Card.css';


interface Props {
    name?: string
    image?: string

};

async function GetPokemon() {
    const url: string = "https://pokeapi.co/api/v2/";
    await axios.get(
        url, {
            headers: {
                Accept: "application/json"
            }
        }
    ).then(
        function (response){
            var pokeName: object = response.data.pokemon

              var logDoConsole = Object.keys(pokeName).map((key) =>{
                var pokeNameMap;

                pokeNameMap = pokeName[key as keyof typeof pokeName]
                return pokeNameMap;
             }) 
            console.log(logDoConsole);
        }
    ).catch();

    // return console.log(data.pokemon);
    
};

GetPokemon()

function Card(props:Props){
    return( <h1> Teste </h1>)


};

export default Card;