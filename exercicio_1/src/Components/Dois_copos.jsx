/* Dois copos meio cheios: Faça um programa para ler um número e 
imprimir uma mensagem dizendo se o mesmo é par e positivo ao mesmo 
tempo. . */

import { useState } from "react"
  

function Dois_copos() {
    const[resultado,setResultado]=useState() 
  
function descobre_numeros(){

    let digiteNumero=Number(prompt('digite um número para saber  se e  par e positivo ao mesmo tempo. '))



if(digiteNumero%2==0){
useState('numeros e par negativo')



}


}


    return (
    <div>
      
{resultado}
<button on onClick={descobre_numeros}></button>




    </div>
  )
}

export default Dois_copos

















