import "./Navegacion.css"
import React, { useState, useEffect } from 'react';
import CiudadesParaNav from "../../funciones/Only-city";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faLocationDot} from "@fortawesome/free-solid-svg-icons"

function Navegacion(props){

  const [UsoDeCity, setUsoDeCity ] = useState("Whole")
  const [modalBoolean, setEstado] = useState(false);
  const [UsoDeTotalPeople, setUsoDeTotalDePeople] = useState(0);
  const [numeroDeAdultos, setNumeroDeAdultos] = useState(0)
  const [numeroDeChildren, setNumeroDeChildren] = useState(0)
  const [MostrarPaises, setMostrarPaises] = useState(true)
  const [MostrarGuests, setMostrarGuests] = useState(false)

  useEffect(() => {
    // Código del efecto
    let TotalDePeople = numeroDeAdultos + numeroDeChildren
    setUsoDeTotalDePeople(TotalDePeople)
  }, [numeroDeAdultos, numeroDeChildren]);

  // Funcion que detona el filtro
  const BtnBuscador = ()=>{
    props.FuncionCiudadDinamica(UsoDeCity, UsoDeTotalPeople)
  } 

  //Escoje la ciudad y guarda en variable
  const BtnsFiltroCiudad = (City)=>{
    setUsoDeCity(City)
  }

  // Controlar los botones de sumar o restar guests
  const PeopleBtnMenos = (People)=>{
    if (People === "adult" && numeroDeAdultos > 0) {
      setNumeroDeAdultos(numeroDeAdultos -1)
    } else if (People === "children" && numeroDeChildren > 0){
      setNumeroDeChildren(numeroDeChildren -1)
    }
  }
  const PeopleBtnMas = (People)=>{
    if (People === "adult") {
      setNumeroDeAdultos(numeroDeAdultos +1)
    } else if (People === "children"){
      setNumeroDeChildren(numeroDeChildren +1)
    }
  }

  // Seccion para cerrar y abrir modales
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
  // Finalizar 

  
    return(

            <div className="contenedor_navegacion">
                <button className="btns_abrir_modal btn_city" onClick={abrrirModal}>{UsoDeCity}, Finland</button>
                <button className="btns_abrir_modal btn_add_guests" onClick={abrrirModalGuests}>Add guests</button>
                <button className="btns_abrir_modal btn_buscar" onClick={abrrirModal}>
                  <div className="icon_loop">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </div>
                  </button>

                {modalBoolean && 
                <div  className='modal'>

                    <div className="modal_top">
                        <p className="edite_search">Edite your search</p>
                        <button onClick={cerrarModal} className='cerrar_nav'>X</button>
                    </div>

                    <div className="modal_busqueda">

                          <div className="modal_paises modal_general">  
                            <button className="btns_para_modal size_nav_modal" onClick={BtnMostrarPaises} >
                              <div>
                                <p className="font_fam_btns subtitle">Location</p>
                                <p className="font_fam_btns">{UsoDeCity}, Finland</p>
                              </div>
                            </button>
                          </div>

                          <div className="modal_guests modal_general">
                            
                            <button className="btns_para_modal size_nav_modal " onClick={BtnNumeroDeGuests} > 
                              <p className="font_fam_btns subtitle">Guests</p>
                              <p className="font_fam_btns">{UsoDeTotalPeople} </p>
                            </button>
                          </div>

                          <button 
                            className=" btns_para_modal btn_search_dentro_modal" 
                            onClick={BtnBuscador}>
                              <div className="icon_loop_modal">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                                <p className="texto_search_modal subtitle">Search</p>
                              </div>
                          </button>

                    </div>

                    <div className="modal_bottom">
                        {MostrarPaises &&
                            <ul className="li_ciudad">
                                {CiudadesParaNav.map((ciudad, index) =>(
                                  <li onClick={()=>BtnsFiltroCiudad(ciudad)} className="li_cada_city">
                                    <div>
                                      <span className="icon_dot"><FontAwesomeIcon fontSize="22px" icon={faLocationDot}/></span>
                                       {ciudad}, Finland
                                    </div>
                                  </li>
                                 ))}
                            </ul>
                        }

                        {MostrarGuests &&
                            <div className="adult_children" >
                                <div className="adult">
                                  <h1 className="space subtitle">Adult</h1>
                                  <p className="space">Age 13 or above</p>
                                  <div className="operacion_suma space">
                                    <button className="btn_operacion" onClick={()=>PeopleBtnMenos("adult")}>-</button>
                                    <p className="number">{numeroDeAdultos}</p>
                                    <button className="btn_operacion" onClick={()=>PeopleBtnMas("adult")}>+</button>
                                  </div>
                                </div>

                                <div className="children">
                                  <h1 className="space subtitle">Children</h1>
                                  <p className="space">Age 2-12</p>
                                  <div className="operacion_suma space">
                                    <button className="btn_operacion" onClick={()=>PeopleBtnMenos("children")}>-</button>
                                    <p className="number">{numeroDeChildren}</p>
                                    <button className="btn_operacion" onClick={()=>PeopleBtnMas("children")}>+</button>
                                  </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>}
            </div>
    )
}
export default Navegacion