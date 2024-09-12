import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import ProdutoPage from './Pages/ProdutoPage'
import UsuarioPage from './Pages/UsuarioPage'
import Render from './Pages/render'




function App() {
  const [pagina,setPagina] = useState()
 

  function mostraHome(){
setPagina(<Home/>)


}



  return (
    <>
     <nav>
      <button onClick={mostraHome}>Produto</button>
    <button onClick={() => {setPagina(<UsuarioPage/>)}}>usuario</button>
     <button onClick={()=>{setPagina(<ProdutoPage/>)}}>produto</button>
     <button onClick={()=>{setPagina(<Render/>)}}>render</button>
     </nav>


{pagina}


    </>
  )
}

export default App
