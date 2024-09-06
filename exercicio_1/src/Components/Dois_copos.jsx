/* Dois copos meio cheios: Faça um programa para ler um número e 
imprimir uma mensagem dizendo se o mesmo é par e positivo ao mesmo 
tempo. . */

import { useState } from "react"
 import './dois_copos.css/.'

function Dois_copos() {
    const[resultado,setResultado]=useState(0) 
  



    function descobre_numeros(){
 
    let digiteNumero=Number(prompt('digite um número para saber  se e  par e positivo ao mesmo tempo. '))



if(digiteNumero%2==0 && digiteNumero>1){
setResultado('numero e par e positivo')



}else{
    setResultado('numero e impar')
}


}


    return (
    <div className="container_dois_copos">
 
<h2> Faça um programa para ler um número e 
imprimir uma mensagem dizendo se<br /> o mesmo é par e positivo ao mesmo
tempo</h2>

<button onClick={descobre_numeros}>digite um numero para o botao clacular e
descobrir  se o mesmo é par e positivo ao mesmo 
tempo</button>
<div> 
{resultado}
</div> 



    </div>
  )
}

export default Dois_copos

















