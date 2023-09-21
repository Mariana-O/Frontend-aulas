import React from "react";
import "./Alertar.css"


function NumberGuesser(){
var inputTag = (document.getElementById("numberId") as HTMLInputElement);
var inputValue = Number(inputTag.value);

 var teste: number = 0

//var teste === "Prod" ? alert("esse esta em prod") : alert("esse é de dev") (TERNARIO)

// if (teste === "prod"){
//   return "esse esta em prod"
// } else{
//   return "Esse é de dev"
// }

//Bom para respostas condicionais
if(inputValue > 15)
{
    teste = 18;
   alert("Seu numero é maior que 15");
   } else if(inputValue < 15 ){
   alert("Seu numero é menor que 15");
   } else{
  alert("Seu numero é igual a 15");
}


//Bom para respostas já definidas
switch (teste){
case 18:
  alert('vim pelo switch case')
  break;
  case 50:
    console.log('cheguei no 50')
    break;
  default:
    alert('esse é um default')
    break;
}
}
//
function Alertar() {
   return (
      <div>
        <div className="input">
            <h3>Numero:</h3>
            <input type="number" id="numberId" />
          </div>

           <button onClick={NumberGuesser}>
              Enviar
            </button>
          </div>
    
    );
  }
  
  export default Alertar;