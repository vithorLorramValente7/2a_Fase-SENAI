import { Link } from "react-router-dom"
import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/generica">Genérica</Link>
        <Link to="/final">Final</Link>
        <Link to="/Numeros712">numeros712</Link>
        <Link to="/Exercicio713A714">Exercicio713A714</Link>
    
    </nav>
  )
}

export default Navbar
