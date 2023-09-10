// Zona de importaciones inicio 
import './App.css'
import Logo from './Componentes/logo/Logo'
import Navegacion from './Componentes/navegacion/Navegacion'
import Stays from './Componentes/stays/Stays'
import Card from './Componentes/card/Card'
import End from './Componentes/end/End'
import Hospitalidades from '../lista/stays.json' // Data
import PruebaUno from './funciones/Filtro-ciudades'
import ExportarFiltroCiudades from './funciones/Filtro-ciudades'
// Zona de importaciones final 

// El primer filtro es mi array original, filtrar solo las ciudades que coincidan
// Usar segundo filtro para los nombres de las ciudades solamente

function App() {
  
  const ImportacionDeFiltroCiudades = ExportarFiltroCiudades("Helsinki")

  
  return (
    <>
      <header className='navegacion'>
        <Logo />
        <Navegacion />
       </header>

      <main className='main'>
        <Stays 
        textoDeStays={Hospitalidades.length}/>
        
        <section className='section_cards'>
         {ImportacionDeFiltroCiudades.map((hospitalidad, index) =>(
          <li>
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
        
      </main>
      <footer className='footer'>
        <End correo="Hussein-Mourad @ DevChallenges.io"/>  
      </footer>
    </>
  )
}

export default App
