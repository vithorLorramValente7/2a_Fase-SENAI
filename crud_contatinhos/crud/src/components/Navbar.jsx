import { Link } from "react-router-dom"
import './Navbar.css'
import Cadastro from "../pages/Cadastro"
function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/generica">Genérica</Link>
        <Link to="/final">Final</Link>
        <Link to="/Cadastro">Cadastro</Link>
  
    </nav>
  )
}

export default Navbar
