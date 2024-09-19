import { useState } from "react"
import Par from "./Par"
import Impar from "./Impar"



function Verificar_se_par() {
    const [inputValor,setInputValor] = useState()
 const [PaginaPar,setPaginaPar] =useState()
 const [PaginaImpar,setPaginaImpar] =useState() 
 
 function verificaPar(){
   

  if (inputValor%2==0) {
   setPaginaPar(<Par/>)
 setPaginaImpar()
}
  else{
setPaginaImpar(Impar)
setPaginaPar()

  }











}


 
 
 
    return (
    <div className="container_vericar_par">
      
      
      <h1>Verificando Números Pares </h1>
<h3>Peça ao usuário para inserir um número e, em seguida, determine se é par ou ímpar.</h3>



<label htmlFor="inputDescobrePar">digite aqui:</label>

<input type="text" id="inputDescobrePar"
value={inputValor}
onChange={(event) => setInputValor(event.target.value)}
/> <button onClick={ verificaPar}>verificar</button>
{PaginaPar}
{PaginaImpar}






    </div>
  )
}

export default Verificar_se_par
