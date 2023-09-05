import "./Navegacion.css"
import React, { useState } from 'react';
import Hospitalidades from '../../../lista/stays.json' // Data

function Navegacion(){

    const [modalBoolean, setEstado] = useState(false);

  function cerrarModal(){
    setEstado(false)
    console.log("si sirvoooo")
  }

  function abrrirModal(){
    setEstado(true)
  }
  
    return(
            <div className="contenedor_navegacion">
                <button onClick={abrrirModal} >Pais</button>
                <button onClick={abrrirModal}>Add guest</button>
                <button onClick={abrrirModal}>Icono de buscar</button>

                {modalBoolean && 
                <div  className='modal'>

                    <div className="modal_top">
                        <p>Edite your search</p>
                        <button onClick={cerrarModal} className='cerrar_nav'>X</button>
                    </div>

                    <div className="modal_busqueda">

                        <div className="modal_paises modal_general">
                            <p>Location</p>
                            <button>Pais</button>
                        </div>

                        <div className="modal_guests modal_general">
                            <p>Guests</p>
                            <button>Add guest</button>
                        </div>

                        <button className="modal_general">Icono de buscar</button>
                    </div>

                    <div className="modal_bottom">
                        <ul>
                            <li>item</li>
                            <li>item</li>
                            <li>item</li>
                        </ul>
                    </div>
                </div>}
            </div>
    )
}
export default Navegacion