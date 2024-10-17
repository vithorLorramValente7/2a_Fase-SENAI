import React, { useState } from 'react'
import Navbar from '../components/Navbar'

function Exercicio713A714() {
  const[inputUmValor,setInputUmValor] = useState('')
  const[inputDoisValor,setInputDoisValor] = useState('')
  const[valoresPares,setValoresPares] = useState('')
  
  
  
  function cacular(){


    let numerosPares = []
    let numeroUm =inputUmValor
    let numeroDois =inputDoisValor


while(numeroUm<numeroDois){
    numeroUm++

    if(numeroUm && numeroDois % 2 == 0){
        numerosPares.push(numeroUm)}



}




   setValoresPares(numerosPares)







  }

    return (
    
    
    <div>
      <Navbar/>


<h1>Exercicio713A714</h1>

<label htmlFor="inputUm">numero minimo</label>
<input type="number" value={inputUmValor}onChange={(event)=>setInputUmValor(event.target.value)}
id='inputUm'/><br/>



<label htmlFor="inputDois">valor maximo</label>
<input type="number" value={inputDoisValor}onChange={(event)=>setInputDoisValor(event.target.value)}
id='inputDois'/><br/>

<button onClick={cacular}>calcular</button>


{valoresPares}


    </div>
  )
}

export default Exercicio713A714
