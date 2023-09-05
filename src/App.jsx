import './App.css'
import Logo from './Componentes/logo/Logo'
import Navegacion from './Componentes/navegacion/Navegacion'
import Stays from './Componentes/stays/Stays'
import Card from './Componentes/card/Card'
import End from './Componentes/end/End'
import Hospitalidades from '../lista/stays.json'

// import NavBtn from './Componentes/navbtn/Navbtn'

function App() {

  
  console.log(Hospitalidades)

  return (
    <>
      
      {/* <NavBtn /> */}
      <header className='navegacion'>

        <Logo />
        <Navegacion />
        
       </header>
      <main className='main'>
        <Stays />
        
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
            
            {console.log(hospitalidad.title)}
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
