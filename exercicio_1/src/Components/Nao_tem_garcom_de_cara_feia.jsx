/*5.31 - Não tem garçom de cara feia: Uma empresa abriu uma linha de 
crédito para os funcionários. O valor da prestação não pode ultrapassar 
30% do salário. Faça um programa que receba o salário, o valor do 
empréstimo e o número de prestações e informe se o empréstimo pode ser 
concedido. Nenhum dos valores informados pode ser zero ou negativo. */









import { useState } from "react"
import './Nao_tem_garcom_de_cara_feia.css/.'

function Nao_tem_garcom_de_cara_feia() {
    const[resultado,setResultado]=useState(0) 
    
    function calcula_credito(){
let digita_valor_salario
let digita_numero_prestacao
let digita_valor_prestacao
let valor_total_prestaca

//para calcular 30% do salario

let porcentagem_salario



digita_valor_salario=Number(prompt('digite o valor do seu salario'))
digita_valor_prestacao=Number(prompt('digite o valor de prestações'))
digita_numero_prestacao=Number(prompt('digite o numero de prestações que voce tem que receber'))

valor_total_prestaca=digita_valor_prestacao*digita_numero_prestacao

porcentagem_salario=(digita_valor_salario*30)/100

 if(digita_numero_prestacao<1 || digita_valor_salario<1 || digita_numero_prestacao<1){
    setResultado('o valores digitado nao podem ser 0 uo menor')
    
    
    
        }



else if(valor_total_prestaca>porcentagem_salario){
setResultado('o valor do pratação nao pode ser maior que 30% do seu salario')


    }else if(porcentagem_salario>valor_total_prestaca){
setResultado('para bem voce receber seu emprestimo')

    }



}
    
    
    
    
    
    
    
    
    
    
    
    return (
    <div className='Nao_tem_garcom_de_cara_feia_container'>
    
<h2>emprestimo</h2>
<p>Não tem garçom de cara feia: Uma empresa abriu uma linha de 
crédito para os funcionários. O valor da prestação não pode ultrapassar <br />
30% do salário. Faça um programa que receba o salário, o valor do 
empréstimo <br /> e o número de prestações e informe se o empréstimo pode ser 
concedido. Nenhum dos valores informados pode ser zero ou negativo. */
</p>
<button onClick={calcula_credito}>emprestimo</button>
<div>
     {resultado} 
     </div>



    </div>
  )
}

export default Nao_tem_garcom_de_cara_feia
