import { useState } from 'react'
import './App.css'
import MaiorIdade from './components/MaiorIdade'
import MenorIdade from './components/MenorIdade'
import DiaSemana from './components/DiaSemana'
import Verificar_se_par from './components/Verificar_se_par'
import CaculadoraSimples from './components/CaculadoraSimples'

function App() {

 
 
  const [inputIdade,setInputIdade] = useState(0)
const[Maior,setMaior] = useState(false)
const[Menor,setMenor]= useState(false)
const [pagina,setPagina]= useState()


function processarIdade(){

if(inputIdade>=18){
setMaior(true)
setMenor(false)
}

else{
 setMenor(true)
setMaior(false)
}


}





  return (
    <>
   
  
   



    <div className='container_inputs'>
      <h1>inputs</h1>
<h2>verificar idades</h2>
      idade:<input type='number'  className='formulario'
      value={inputIdade}
      onChange={(event)=>{setInputIdade(event.target.value)}}
      />
<button onClick={processarIdade}>processar idade</button> 

{Maior && <MaiorIdade/>}
{Menor && <MenorIdade/>}
</div>
   
   
   <div>
<DiaSemana/>

<Verificar_se_par/>
<CaculadoraSimples/>













   </div>
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    </>
  )
}

export default App
