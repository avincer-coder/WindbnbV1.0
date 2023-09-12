import { useState } from "react"
import "./Stays.css"
function Stays(props){
    // Logica para contar styles renderizados 

    // const [staysDinamico, setStaysDinamico] = useState(props.textoDeStays)

    return(
        <>
         <div className="contenedor_stays">
            <h2 className="texto_Finlandia">Stays in Finland</h2>
            <h3 className="texto_stays">{props.textoDeStays} stays</h3> 
            </div>
        </>
    )
}
export default Stays