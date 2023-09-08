import { useState } from "react"
import "./Stays.css"
function Stays(props){
    // Logica para contar styles renderizados 

    const [staysDinamico, setStaysDinamico] = useState(props.textoDeStays)

    return(
        <>
         <div className="contenedor_stays">
            <h2>Stays in Finlandia</h2>
            <h3>{staysDinamico}+ Stays</h3> 
            </div>
        </>
    )
}
export default Stays