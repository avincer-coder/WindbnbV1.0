// Zona de importaciones inicio 
import './App.css'
import Logo from './Componentes/logo/Logo'
import Navegacion from './Componentes/navegacion/Navegacion'
import Stays from './Componentes/stays/Stays'
import Card from './Componentes/card/Card'
import End from './Componentes/end/End'
import Hospitalidades from '../lista/stays.json' // Data
import ExportarFiltroCiudades from './funciones/Filtro-ciudades'
import { useEffect, useState } from 'react'
// Zona de importaciones final 

function App() {
  const [CiudadDinamica, setCiudadDinamica] = useState(null)
  const [PeopleTotal, setPeopleTotal] = useState(0)
  const [numeroDeStays, setNuemeroDeStays] = useState(Hospitalidades.length)
  const [arraydata , setarraydata] = useState(Hospitalidades) 

  useEffect(() => {



   const ListaCiudadesFiltradas = ExportarFiltroCiudades(CiudadDinamica, 
   PeopleTotal)

    if (CiudadDinamica == null) {
      console.log("No se usara filtro todo se quedara normal")
    }else{
      setarraydata(ListaCiudadesFiltradas)
      setNuemeroDeStays(ListaCiudadesFiltradas.length)
    }

  }, [CiudadDinamica, PeopleTotal]);
  
  



  const FuncionCiudadDinamica = (City, TotalDePeople)=>{
      setCiudadDinamica(City)
      setPeopleTotal(TotalDePeople)

      console.log(PeopleTotal)
      console.log(CiudadDinamica)

      // setListaDinamica(ListaCiudadesFiltradas)
  
      // setNuemeroDeStays(ListaCiudadesFiltradas.length)
  }
  
  return (
    <>
      <header className='navegacion'>
        <Logo />
        <Navegacion 
          FuncionCiudadDinamica={FuncionCiudadDinamica}
           />
       </header>

      <main className='main'>
      
        <Stays 
        textoDeStays={numeroDeStays}/>
        
        <div className='contenedor_all_cards'>
          <section className='section_cards'>
            {arraydata.map((hospitalidad, index) =>(
              <li className='renderisacion_cards'>
                <Card key={index}
                photo={hospitalidad.photo}
                title={hospitalidad.title} 
                type={hospitalidad.type}
                beds={hospitalidad.beds}
                rating={hospitalidad.rating}
                superHost={hospitalidad.superHost} />
              </li>
            ))}
          </section>
        </div>
        
      </main>
      <footer className='footer'>
        <End correo="Hussein-Mourad @ DevChallenges.io"/>  
      </footer>
    </>
  )
}

export default App
