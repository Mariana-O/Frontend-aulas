import '../alertext/AlertText.css'
function NumberGuesser(){
    var divTag = (document.getElementById("novaMensagem") as HTMLDivElement);
    
    var nameId = (document.getElementById('nameId') as HTMLInputElement).value.toString();
    var idadeId = (document.getElementById("inputIdade") as HTMLInputElement);
    var Idades = Number(idadeId.value);
    
    var enderecoId = (document.getElementById('inputEndereco') as HTMLInputElement).value.toString();
    var bairroId= (document.getElementById('inputBairro') as HTMLInputElement).value.toString();
    
    var NumberId = (document.getElementById("inputNumber") as HTMLInputElement);
    var Numeros = Number(NumberId.value);
    
 if( nameId === ""){
  alert('Nome não pode ser vazio') 
  divTag.innerHTML = "" } 
 else if (Idades === 0 ){
  alert('Idade não pode estar vazio')
  divTag.innerHTML = ""
 } else if (enderecoId === ""){
  alert('Endereço não pode estar vazio')
  divTag.innerHTML = ""
 } else if (bairroId === ""){
  alert('Bairro não pode estar vazio')
  divTag.innerHTML = ""
 } else if(Numeros === 0 ){
  alert ('Telefone não pode estar vazio') 
  divTag.innerHTML = ""
 } else  {
   divTag.innerHTML = `
   <div className="textinho">
   <h5>Seu nome é ${nameId}</h5>
   <h5>tem ${Idades} anos </h5>
   <h5>Endereço ${enderecoId}</h5>
   <h5> localizado no bairro ${bairroId}.</h5>
   <h5>Telefone para contato ${Numeros}</h5>
   </div>
  `;
}

  //   TERNARIO - 
  //    nameId === "" ||
  //    Idades === 0 ||
  //    isNaN(Idades) ||
  //    enderecoId === "" || 
  //    bairroId === ""||
  //    Numeros === 0 ||
  //    isNaN(Numeros)
  //    ? alert('Preencha todos os campos') :
  //    divTag.innerHTML = `
  //    <div className="textinho">
  //    <h5>Seu nome é ${nameId}</h5>
  //    <h5>tem ${Idades} anos </h5>
  //    <h5>Endereço ${enderecoId}</h5>
  //    <h5> localizado no bairro ${bairroId}.</h5>
  //    <h5>Telefone para contato ${Numeros}</h5>
  //    </div>
  //   `; 
    
  
    
}

export default NumberGuesser;