// Zona de importaciones inicio 
import './App.css'
import Logo from './Componentes/logo/Logo'
import Navegacion from './Componentes/navegacion/Navegacion'
import Stays from './Componentes/stays/Stays'
import Card from './Componentes/card/Card'
import End from './Componentes/end/End'
import Hospitalidades from '../lista/stays.json' // Data
import ExportarFiltroCiudades from './funciones/Filtro-ciudades'
import { useState } from 'react'
// Zona de importaciones final 

function App() {
  const [CiudadDinamica, setCiudadDinamica] = useState(null)
  const [PeopleTotal, setPeopleTotal] = useState(0)
  const [numeroDeStays, setNuemeroDeStays] = useState(Hospitalidades.length)
  const [ListaDinamica, setListaDinamica] = useState(Hospitalidades)
  
  



  const FuncionCiudadDinamica = (City, TotalDePeople)=>{
      setPeopleTotal(TotalDePeople)
      setListaDinamica(ListaCiudadesFiltradas)
      setCiudadDinamica(City)
      setNuemeroDeStays(ListaCiudadesFiltradas.length)
      return City // Prueba
  }

  const ListaCiudadesFiltradas = ExportarFiltroCiudades(CiudadDinamica, PeopleTotal)
  
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
            {ListaDinamica.map((hospitalidad, index) =>(
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
