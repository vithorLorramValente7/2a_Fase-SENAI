import React from 'react'
import { useState } from 'react'




function CaculadoraSimples() {
 
 
 
    const [inputUmValor,setInputUmValor] = useState() 
 const[inputDoisValor,setInputDoisValor] = useState() 
 
    function subtrair(){

let subtraiNumero=inputUmValor-inputDoisValor

alert(subtraiNumero)

}
   

function somar(){

        let somarNumero

        somarNumero = Number(inputUmValor)+Number(inputDoisValor)



        alert(somarNumero)
    
        


    }  

    function multiplicar(){

        let multiplicarNumero=inputUmValor*inputDoisValor

        alert(multiplicarNumero)
    


    }

    function dividir(){
        
        
        let dividirNumero=inputUmValor/inputDoisValor

        alert(dividirNumero)
    







    }








    
    return (
    
    <div>
      
<h1>Caculadora Simples </h1>
<label htmlFor="inputUmValor">digite um valor:</label>

<input type="text" id='inputUmValor' 
value={inputUmValor}
onChange={(event) => setInputUmValor (event.target.value)}
/>



<label htmlFor="inputDoisValor">digite um segundo valor:</label>

<input type="text" id='inputDoisValor' 
value={inputDoisValor}
onChange={(event) => setInputDoisValor(event.target.value)}
/>



<div className='div_button_caculos'>
<button onClick={somar}>somar</button>
<button onClick={subtrair}>subtrair</button>
<button onClick={multiplicar}>multiplicar</button>
<button onClick={dividir}>dividir</button>

</div>





    </div>
  )
}

export default CaculadoraSimples
