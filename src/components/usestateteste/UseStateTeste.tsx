import React, { useState, useEffect } from "react";
import "./UseStateTeste.css";





function NameUpdater(event: any) {
  event.preventDefault();
  var inputName: any = document.getElementById("nameUpdaterId");
  var inputEndereco: any = document.getElementById("enderecoUpdaterId");
  var inputBairro: any = document.getElementById("bairroUpdaterId");
  var inputCidade: any = document.getElementById("cidadeUpdaterId");
  var inputTelefone: any = document.getElementById("telefoneUpdaterId");

  var inputValue = [];

  inputValue.push(
    inputName.value,
    inputEndereco.value,
    inputBairro.value,
    inputCidade.value,
    inputTelefone.value
  );

  var localName: any = localStorage.setItem("name", inputName.value.toString());
  var localEndereco: any = localStorage.setItem("endereco",inputEndereco.value.toString());


  // for (inputValue; inputValue.indexOf(0) < Array.length; inputValue.length++){
  //   var element = inputValue;
  //   console.log(element)
  // }


  // alert(localStorage.getItem("name"));
}


function UseStateTeste() {
  var [teste, setTeste] = useState<number>(6);

  useEffect(() => {
    setTeste(10);
    setTeste(50);
    return console.log(teste);
  }, [teste]);

  return (
    <div>
      <h1>{teste}</h1>
      <div className="inputs">
        <div className="inputsChildren">
          <h3>Nome:</h3>
          <input type="text" id="nameUpdaterId" />
        </div>
        <div className="inputsChildren">
          <h3>Endereço:</h3>
          <input type="text" id="enderecoUpdaterId" />
        </div>
        <div className="inputsChildren">
          <h3>Bairro:</h3>
          <input type="text" id="bairroUpdaterId" />
        </div>
        <div className="inputsChildren">
          <h3>Cidade:</h3>
          <input type="text" id="cidadeUpdaterId" />
        </div>
        <div className="inputsChildren">
          <h3>Telefone:</h3>
          <input type="text" id="telefoneUpdaterId" />
        </div>
        <div>
          <button type="submit" onClick={NameUpdater}>
            Enviar
          </button>
        </div>
        <div id="itens"></div>
      </div>
    </div>
  );
}

export default UseStateTeste;