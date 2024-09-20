/*- Ler a distância da próxima corrida e dizer quanto tempo vai levar.
1 dado de Entrada: Distância (em quilômetros);
1 dado de Saída: Tempo de viagem (em segundos).
Simples assim.
5.19 - SEGUNDA ETAPA:
O tempo de viagem já é apresentado em segundos...
Caso este tempo seja maior que um minuto, apresentar este valor também 
em minutos;
Caso seja maior que uma hora, apresentar também em horas;
Caso seja maior que um dia, apresentar também em dias;
Caso seja maior que 30 dias, apresentar também em meses;
Caso seja maior que 12 meses, apresentar também em anos.
Deu, simples assim...

  */
//velocidade da luz=300000 km/s

//t=d/v=ts


import { useState } from "react"




function Star_ubers() {
    const[resultado,setResultado]=useState()
  
  
  function calcula_velocidade(){
  let digite_distancia
  let velocidade=300000
let tempo_em_segundo
let tempo_em_minutos
let tempo_em_horas
let tempo_em_dias
let tempo_em_meses
let tempo_em_anos
  digite_distancia=Number(prompt('digite km a distancia a percorer:'))

tempo_em_segundo=digite_distancia/velocidade

// em segundos
if(tempo_em_segundo<60){
setResultado('vai levar:'+tempo_em_segundo+'segundos')


}
// em minutos
else if(tempo_em_segundo>60 && tempo_em_segundo<3600){

tempo_em_minutos=tempo_em_segundo/60


    setResultado('vai levar '+(tempo_em_minutos=tempo_em_minutos.toFixed())+' minutos')



}
// em horas
else if(tempo_em_segundo>=3600 && tempo_em_segundo<86.400){
    
    tempo_em_horas=(tempo_em_segundo/60)/60
    
    
    setResultado('vai levar'+(tempo_em_horas=tempo_em_horas.toFixed(1))+' horas')
}


//em dias
else if( tempo_em_segundo>=86.400 && tempo_em_segundo<2592000){

   tempo_em_dias=((tempo_em_segundo/60)/60)/24
    
    
    setResultado('vai levar'+(tempo_em_dias=tempo_em_dias.toFixed(1))+' dias')

}
//em meses
else if(tempo_em_segundo>=2592000 && tempo_em_segundo<31104000){

    tempo_em_meses=(((tempo_em_segundo/60)/60)/24)/30
    setResultado('vai levar'+(tempo_em_meses=tempo_em_meses.toFixed(1))+'meses')
}

// em ano
else if(tempo_em_segundo>=31104000){

    tempo_em_anos=((((tempo_em_segundo/60)/60)/24)/30)/12
    setResultado('vai levar'+(tempo_em_anos=tempo_em_anos.toFixed(1))+'anos')
}



















}
  
  
    
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  return (
    <div className="star_uber_container">
      
<h1>star uber</h1>
{resultado}
<button onClick={calcula_velocidade}>calcular</button>







    </div>
  )
}

export default Star_ubers















