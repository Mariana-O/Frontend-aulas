import React from "react";
import axios from "axios";
import './Imagem.css';

var pokeImagem: string;

async function Chimchar(){
    const url: string = "https://pokeapi.co/api/v2/pokemon/390/";

    await axios.get(
        url, {
        headers: {
            Accept: "Application/json"
        }
    }
    ).then(
       function (response){
       var pokeImg: string = response.data.sprites.front_default;

       pokeImagem = pokeImg

       return pokeImagem;
       }
    ).catch();

}

Chimchar()


function Imagem(){
    return(
        <div>
            <h1>
            Chimchar
            </h1>
            <img src={pokeImagem} alt="Chimchar"/>
        </div>
    );
}

export default Imagem;