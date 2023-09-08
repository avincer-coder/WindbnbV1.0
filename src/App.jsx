// Zona de importaciones inicio 
import './App.css'
import Logo from './Componentes/logo/Logo'
import Navegacion from './Componentes/navegacion/Navegacion'
import Stays from './Componentes/stays/Stays'
import Card from './Componentes/card/Card'
import End from './Componentes/end/End'
import Hospitalidades from '../lista/stays.json' // Data
// Zona de importaciones final 

function App() {
  console.log(Hospitalidades.length)
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
         {Hospitalidades.map((hospitalidad, index) =>(
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
