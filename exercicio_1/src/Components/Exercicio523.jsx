/**5.23 – Um comerciante comprou um produto e quer vendê-lo com lucro de 
45% se o valor da compra for menor que R$20,00; caso contrário, o lucro 
será de 30%. Faça um programa que entre com o valor do produto e mostre 
o valor de venda. */

import React from 'react'
import { useState } from 'react'

function Exercicio523() {
  const [inputValor,setInputValor] = useState()
  const [valorComLucro,setValorComLucro] = useState()
  
  function calculaLucro(){

    let valorMinimoLucro
    let valorMaximoLucro
    let valorTotal

    if (inputValor<20) {
    valorMinimoLucro=(inputValor*30)/100
valorTotal=Number(inputValor)+Number(valorMinimoLucro)

setValorComLucro(valorTotal)

}

else if(inputValor>20){
valorMaximoLucro=(inputValor*45)/100
valorTotal=Number(inputValor)+Number(valorMaximoLucro)
setValorComLucro(valorTotal)

}



  }
  
  
  
  
  
    return (
    <div>
      
<h1>mercado legal🦈</h1>

<p>5.23 – Um comerciante comprou um produto e quer vendê-lo com lucro de <br />
45% se o valor da compra for menor que R$20,00; caso contrário, o lucro <br />
será de 30%. Faça um programa que entre com o valor do produto e mostre 
o valor de venda./</p>

<label htmlFor="inputValorMercado">digite o valor do produto</label>

<input type="text" id='inputValorMercado' 
value={inputValor}
onChange={(event) => setInputValor(event.target.value)}
/>
<div>
<button onClick={calculaLucro}>calcular o preço do produto</button>

</div>
<p>valor normal de mercado:</p>{inputValor}
<p>valor com a porcentagem de lucro:</p>{valorComLucro}






    </div>
  )
}

export default Exercicio523
