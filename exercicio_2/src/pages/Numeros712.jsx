import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'

function Numeros712() {
 
 const [valorInput,setValorInput] = useState('')
 const [contagem,setContagem] = useState('')
 const [resultado,setResultado] = useState(false)



 function lerNumero(){



    if(valorInput>100 && valorInput <200){
    setContagem(contagem+1)


}




else if(valorInput<=99){
    
    

}



 }function rendCon(){

setResultado(true)


 }
 





 
  return (
    <div>
     <Navbar/> 
<h1>exercicio 7.12</h1>

<input 
type='text'
value={valorInput}
onChange={(event)=>setValorInput(event.target.value)}

/>



<button onClick={lerNumero}>ler</button>


<button onClick={rendCon}
>resultado</button>
{resultado && <p>numeros na faixa 100 a 200</p>}





    
    
    
    
    
    
    </div>
  
  
  
  
  
  )


}

export default Numeros712
