import "./Navegacion.css"
import React, { useState } from 'react';
import Hospitalidades from '../../../lista/stays.json' // Data
import CiudadesParaNav from "../../funciones/Only-city";
function Navegacion(props){

  
    const [modalBoolean, setEstado] = useState(false);
    
    
    const BtnsFiltroCiudad = (City)=>{
    console.log(City)
    props.pruebaNavegacion(City, TotalDePeople)
  }

  const [numeroDeAdultos, setNumeroDeAdultos] = useState(0)
  const [numeroDeChildren, setNumeroDeChildren] = useState(0)

  const PeopleBtnMenos = (People)=>{
    console.log(People)
    if (People === "adult" && numeroDeAdultos > 0) {
      setNumeroDeAdultos(numeroDeAdultos -1)
    } else if (People === "children" && numeroDeChildren > 0){
      setNumeroDeChildren(numeroDeChildren -1)
    }
  }
  const PeopleBtnMas = (People)=>{
    console.log(People)
    if (People === "adult") {
      setNumeroDeAdultos(numeroDeAdultos +1)
    } else if (People === "children"){
      setNumeroDeChildren(numeroDeChildren +1)
    }
  }
  let TotalDePeople = numeroDeAdultos + numeroDeChildren
  
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

                  {/* <h1>{props.pruebaNavegacion}</h1> */}

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
                            <p>{TotalDePeople}</p>
                            <button onClick={BtnNumeroDeGuests} >Add guest</button>
                        </div>

                        <button className="modal_general">Icono de buscar</button>
                    </div>

                    <div className="modal_bottom">
                        {MostrarPaises &&
                            <ul>
                                {CiudadesParaNav.map((ciudad, index) =>(
                                  <li onClick={()=>BtnsFiltroCiudad(ciudad)} >
                                    {ciudad}
                                  </li>
                                 ))}
                            </ul>
                        }

                        {MostrarGuests &&
                            <div>
                                <div>
                                  <h1>Adult</h1>
                                  <p>Age 13 or above</p>
                                  <button onClick={()=>PeopleBtnMenos("adult")}>-</button>
                                  <p>{numeroDeAdultos}</p>
                                  <button onClick={()=>PeopleBtnMas("adult")}>+</button>
                                </div>
                                <div>
                                  <h1>Children</h1>
                                  <p>Age 2-12</p>
                                  <button onClick={()=>PeopleBtnMenos("children")}>-</button>
                                  <p>{numeroDeChildren}</p>
                                  <button onClick={()=>PeopleBtnMas("children")}>+</button>
                                </div>

                            </div>
                            
                        }
                    </div>
                </div>}
            </div>
    )
}
export default Navegacion