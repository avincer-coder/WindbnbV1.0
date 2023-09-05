import "./Navegacion.css"
import React, { useState } from 'react';
import Hospitalidades from '../../../lista/stays.json'

function Navegacion(){

    Hospitalidades.map(hospitalidad => {
        console.log(hospitalidad.city);
      });

    const [xdenavbar, setEstado] = useState(false);

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

                {/* {xdenavbar && <div  className='prueba'>
                <button onClick={cerrarModal} className='cerrar_nav'>X</button>
                <h1 >¡Este es un botón de navegación de prueba!</h1>
                </div>} */}


                {xdenavbar && 
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
                            <li >
                            {/* <i className="fa-solid fa-location-dot" style="color: #000000;"></i> */}
                                 item</li>
                            <li>item</li>
                            <li>item</li>
                        </ul>
                        
                    </div>
                </div>}

                {/* <div  className='prueba'>
                <button onClick={cerrarModal} className='cerrar_nav'>X</button>
                <h1 >¡Este es un botón de navegación de prueba!</h1>
                </div> */}

            </div>
    )
}
export default Navegacion