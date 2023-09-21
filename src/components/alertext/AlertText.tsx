import React from "react";
import NumberGuesser from "../service/NumberGuesser";
import './AlertText.css'

function AlertText() {
  return (
    <div>
      <div className="inputs">
        <div className="input-children">
         <h3>Nome:</h3>
         <input type="text" id="nameId" />
        </div>

       <div className="input-children">
         <h3>Idade:</h3>
         <input type="number" id="inputIdade"/>
        </div>

        <div className="input-children">
         <h3>Endereço:</h3>
         <input type="text" id="inputEndereco"/>
        </div>

        <div className="input-children">
         <h3>Bairro:</h3>
         <input type="text" id="inputBairro"/>
        </div>

        <div className="input-children">
         <h3>Telefone:</h3>
         <input type="number" id="inputNumber"/>
        </div>
     </div>

       <button onClick={NumberGuesser}>
           Enviar
        </button>
         <br/>
         <div id="novaMensagem"></div>
        </div> 
        );
}

export default AlertText;
