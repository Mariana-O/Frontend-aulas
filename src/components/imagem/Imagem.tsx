import React, { useState } from "react";
import axios from "axios";
import './Imagem.css';

// interface stateProps{
//     pokeImagem: string;

// async function Chimchar(){
//     const url: string = "https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg";
//     var [pokeImagem,setPokeImagem] = useState<string | null>(null);

//     await axios.get(
//         url, {
//         headers: {
//             // Accept: "Application/json"
//             responsetype: 'arraybuffer'
//         }
//     }
//     ).then(
//        function (response){
//        var pokeImg = Buffer.from(response.data, 'binary').toString('base64');

//        setPokeImagem(pokeImg)

//       return console.log(pokeImagem);
//        }
//     ).catch();

// }

// Chimchar()


async function Imagem(){
    const url: string = "https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg";
    var [pokeImagem,setPokeImagem] = useState<string | null>(null);
  await axios.get(
        url, {
        headers: {
            // Accept: "Application/json"
            responsetype: 'arraybuffer'
        }
    }
    ).then(
       function (response){
       var pokeImg = Buffer.from(response.data, 'binary').toString('base64');

       setPokeImagem(pokeImg)

      return console.log(pokeImg);
       }
    ).catch();
};

export default Imagem;

//     return(
//         <div>
//             {/* <h1>
//             Chimchar
//             </h1>
//             <img src={`data:image/jpeg;based64,${pokeImagem}`} alt="a"/>
//             <img src={pokeImagem} alt="Chimchar"/> */}
//         </div>
//     );
// }
