import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";
import Contato from "../pages/Contato";
import Generica from "../pages/Generica";
import Final from "../pages/Final";
import Numeros712 from "../pages/Numeros712";
import Exercicio713A714 from "../pages/Exercicio713A714";
const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/contato", element: <Contato />},
    {path: "/generica", element: <Generica />},
    {path: "/final", element: <Final />},
    {path: "/Numeros712", element: <Numeros712 />},
    {path: "/Exercicio713A714", element: <Exercicio713A714/>},
])

export default router;
