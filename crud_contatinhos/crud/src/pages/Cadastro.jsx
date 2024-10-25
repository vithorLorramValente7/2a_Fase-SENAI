import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import {useContext } from 'react'
import './Cadastro.css'
function Cadastro() {
 const{contatinho,setContatinho,Contatinhos,setContatinhos}= useContext(GlobalContext)
    const[inputNome,setInputNome] = useState('')
   
 
 
    function cadastrarContatinho(){

// setContatinho(inputNome)
   
setContatinhos([...Contatinhos,inputNome])
console.log(Contatinhos);









 }
 
 
 
 
 
 
 
 
 
    return (
   <div>
      <Navbar />  
<h1>cadastre seu contatinho🤢🤢</h1>

<div className="input_container">
<label htmlFor="">nome</label>
<input type="text"
value={inputNome}
onChange={(event) => setInputNome(event.target.value)}

/>

</div>
<button
onClick={cadastrarContatinho}

>cadastrar contatinho</button>
<div className='div_contatinhos'>

{Contatinhos.map((Contatinhos,index)=>(


   <div key={index} className='card-contatos'>
<h2>contato</h2>
<p>{Contatinhos}</p>

   </div>
    
    
  

))}

</div>
   
   
   
    </div>
  )
}

export default Cadastro
