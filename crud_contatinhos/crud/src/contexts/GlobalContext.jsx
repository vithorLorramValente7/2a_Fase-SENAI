import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
let usuarioLogado = 'Gill Bates'
const[contatinho,setContatinho]= useState('')
const[Contatinhos,setContatinhos] = useState([])
    return(
        <GlobalContext.Provider value={
            {   
                usuarioLogado,
                contatinho,
                setContatinho,
                Contatinhos,
                setContatinhos,
            
            
            }}>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            {children}
        </GlobalContext.Provider>
    )
}
