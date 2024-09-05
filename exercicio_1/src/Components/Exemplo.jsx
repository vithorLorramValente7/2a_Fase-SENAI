import { useState } from "react"




function Exemplo() {
 const [resultado,setResultado,subtrair] = useState(1)
 function aumentar(){
    setResultado(resultado+1)
    
     }
     function subtracao(){
        setResultado(resultado-1)
        
         }
    
    
         return (
    <div>
    
    <button onClick={subtracao}>-</button>
     
{resultado}
<button onClick={aumentar}>+</button> 











    </div>
  )
}

export default Exemplo
