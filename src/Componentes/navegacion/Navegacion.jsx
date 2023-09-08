import "./Navegacion.css"
import React, { useState } from 'react';
import Hospitalidades from '../../../lista/stays.json' // Data

function Navegacion(){

  
    const [modalBoolean, setEstado] = useState(false);
  const pruebaLi = ()=>{
    console.log("Soy un li con onclick")
  }
  
  function cerrarModal(){
    setEstado(false)
    console.log("si sirvoooo")
  }

  function abrrirModal(){
    setEstado(true)
    setMostrarGuests(false)
    setMostrarPaises(true)
  }
  function abrrirModalGuests(){
    setEstado(true)
    setMostrarGuests(true)
    setMostrarPaises(false)
  }

  const BtnNumeroDeGuests = ()=>{
    setMostrarGuests(true)
    setMostrarPaises(false)
  }

  const BtnMostrarPaises = () =>{
    setMostrarGuests(false)
    setMostrarPaises(true)
  }

  const [MostrarPaises, setMostrarPaises] = useState(true)
  const [MostrarGuests, setMostrarGuests] = useState(false)
  
    return(
            <div className="contenedor_navegacion">
                <button onClick={abrrirModal}>Pais</button>
                <button onClick={abrrirModalGuests}>Add guest</button>
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
                            <button onClick={BtnMostrarPaises} >Pais</button>
                        </div>

                        <div className="modal_guests modal_general">
                            <p>Guests</p>
                            <button onClick={BtnNumeroDeGuests} >Add guest</button>
                        </div>

                        <button className="modal_general">Icono de buscar</button>
                    </div>

                    <div className="modal_bottom">
                        {MostrarPaises &&
                            <ul>
                                <li onClick={pruebaLi}>Alemania</li>
                                <li>Berlin</li>
                                <li>Tokyo</li>
                            </ul>
                        }

                        {MostrarGuests &&
                            <ul>
                                <li>añadir</li>
                                <li>Quitar</li>
                                <li>Total</li>
                            </ul>
                        }
                    </div>
                </div>}
            </div>
    )
}
export default Navegacion