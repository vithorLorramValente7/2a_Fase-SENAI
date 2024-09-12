import React, { useState } from 'react'
import './Render.css'
import PainelAdm from '../components/PainelAdm'
import ProdutosParaMaiores from '../components/ProdutosParaMaiores'



function render() {
 const [adm,setAdm]= useState(true)
 const [idade,setIdade]=useState(0)
 
 const [usuario,setUsuario]=useState(false)
    return (
    <div className='border_container'>
      
    <h1>renderizaçoes e condicionais</h1>
    
<div>
<button onClick={()=>{setAdm(true)}}>ADM</button>
<button onClick={()=>{setAdm(false)}}>oreiasseca</button>
  { adm && <PainelAdm/>  }</div>


<div className='render_container'>

<button onClick={()=>{setIdade(idade-1)}}>-</button>

{idade}



<button onClick={()=>{setIdade(idade+1)}}>+</button>
{idade>=18 && <ProdutosParaMaiores/>}
</div>



<div className='render_container'>


<button onClick={()=>{setUsuario(true)}}>logar</button>



<button onClick={()=>{setUsuario(false)}}>deslogar</button>





</div>

    </div>
  )
}

export default render
