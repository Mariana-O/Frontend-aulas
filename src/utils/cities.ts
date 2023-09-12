import React from "react";

interface Cities {
    Rj: string;
    Sp: string;
    Mg?: string;
}

// ["teste", "oi", {1:"valor", 2:"outro"}, "ola", 2"]

var cidade: Cities;

function Cidades(): Cities{
    let cities = cidade;
      cities = {
        Rj: "Rio de Janeiro",
        Sp: "São Paulo",
        Mg: "Minas Gerais",
      }
      return cities;
}

// Cidades = {
//     Rj: "Rio de Janeiro",
//     Sp: "São Paulo",
//     Mg: "Minas Gerais",
// }

export default Cidades;