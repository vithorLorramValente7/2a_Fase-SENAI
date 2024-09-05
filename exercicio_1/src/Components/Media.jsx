
import { useState } from 'react'
import './Media.css/.'


function media() {
    const[resultado,setResultado]=useState()


    function calcularMedia(){
let notaUm=Number(prompt('digite sua nota'))
let notaDois=Number(prompt('digite sua nota'))
let Media=(notaUm+notaDois)/2
setResultado(Media)

}



    return (
    <center>
    <div className='media_container'>
   <h2>Exercicios para calcular media de 2 numeros</h2>

<button onClick={calcularMedia}>calcular</button>

<div>
media:{resultado}
</div>

    </div></center>
  )
}

export default media
