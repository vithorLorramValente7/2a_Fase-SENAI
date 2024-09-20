import React from 'react'
import { useState } from 'react'





function Exercicio524() {
  const [valorNotaUm,setValorNotaUm] = useState()
  const [valorNotaDois,setValorNotaDois] = useState()
  const [conceito,setConceito]= useState()
  const [media,setMedia]= useState()
  
  
  
  function calcularMedia(){

    let mediaTotal
 let somaNotas

 somaNotas=Number(valorNotaUm)+Number(valorNotaDois)
mediaTotal=somaNotas/2


if(mediaTotal>=0 && mediaTotal<=4){

setConceito('E')
setMedia(mediaTotal)

}else if(mediaTotal>4 && mediaTotal<=6){
    setConceito('D')
    setMedia(mediaTotal)
}else if(mediaTotal>6 && mediaTotal<=7.5){
    
    setConceito('C')
    setMedia(mediaTotal)


}else if(mediaTotal>7.5 && mediaTotal<=9){

    setConceito('B')
    setMedia(mediaTotal)
}else if (mediaTotal>9){


    setConceito('A')
    setMedia(mediaTotal)

}








  }
  
  
  
  
  
  
  
    return (
    <div>
      
<h1>5.24 – Faça um programa que leia duas <br />notas parciais obtidas por um 
aluno </h1>

<p> Faça um programa que leia duas notas parciais obtidas por um <br />
aluno qualquer numa disciplina qualquer ao longo de um semestre <br />
qualquer, e calcule a sua média. De posse da média, esta deve ser <br /> 
convertida em conceito que é o novo hype do momento na educação! <br />
A conversão deve seguir a regra descrita <br />
Entre 9.0 e 10.0 A <br />
Entre 7.5 e 9.0 B <br />
Entre 6.0 e 7.5 C <br />
Entre 4.0 e 6.0 D <br />
Entre 0.0 e 4.0 E <br />
O resultado deste programa deve ser um relatório contendo as notas do  <br />
aluno, sua média e o conceito atingido.</p>


<label htmlFor="ValorNotaUM">digite a nota um:</label>
<input type="text" id='ValorNotaUM' 
value={valorNotaUm}
onChange={(event) => setValorNotaUm(event.target.value)}
/>
<br />


<label htmlFor="ValorNotaDOIS"> digite a nota dois:</label>
<input type="text" id='ValorNotaDOIS'
value={valorNotaDois}
onChange={(event) => setValorNotaDois(event.target.value)}

/>
<div className='container_inputs_notas'>
<p>primeira nota:</p>{valorNotaUm} <br />
<p>segunda nota:</p>{valorNotaDois} <br />
<p>media:</p>{media} <br />
<p>media em conceito:</p>{conceito} <br />
</div>
<button onClick={calcularMedia}>calcular media e mostrar conceito</button>








    </div>
  )
}

export default Exercicio524
