import { useState } from "react"
 import './Numeros.css/.'
function Numeros() {
 const[resultado,setResultado]=useState()
 
function digita_numero() {

let digiteNumero=Number(prompt('digite um numero para saber se negativo ou positivo'))

if(digiteNumero==0){
    setResultado('numero e nulo') 
}
else if(digiteNumero>1){
    setResultado('numero e positivo') 
}else if (digiteNumero<0){
    setResultado('numero e negativo') 


}
 
}
 
 
    return (
    <div className="container_numeros">
      <h2> Ler um número e informar se ele é positivo, 
negativo ou nulo.</h2>
<div></div>
{resultado}
<div/>
<button onClick={digita_numero}>descubra se o numero e positivo ou negativo</button>


    </div>
  )
}

export default Numeros