import React, { useState } from 'react'

function DiaSemana() {
 const [inputDia,setInputDia] = useState() 
  const [inputValor,setInputValor]= useState()
  
  function descobreDia(){

if(inputValor==1){
setInputDia('segunda')
}
else if(inputValor==2){
  setInputDia('terça')
}
  
else if(inputValor==3){
  setInputDia('quarta')
}

else if(inputValor==4){
  setInputDia('quinta')
}

else if(inputValor==5){
  setInputDia('sexta')
}

else if(inputValor==6){
  setInputDia('domingo')
}
else if(inputValor==7){
  setInputDia('sabado')
}
else{
setInputDia('digite um numero 1-7')

}
  





}








  



    return (
    <div className='container_dias_semana'>
      
      
      <h1>dia da semana</h1>
<h3>Dia da Semana: Peça ao usuário que insira um número de 1 a 7 e, em seguida, <br /> mostre o dia da semana correspondente (por exemplo, 1 = Domingo, 2 = Segunda, etc.).</h3>

digite aqui:<input 
      value={inputValor}
      onChange={(event)=>{setInputValor(event.target.value)}}/>
   
  <button onClick={descobreDia}>descobrir</button>
  {inputDia}















    </div>
  )
}

export default DiaSemana
