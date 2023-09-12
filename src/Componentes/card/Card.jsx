import "./Card.css"
function Card(prop){
    return(
        <div className="contenedor_card">
            <div className="contenedor_imagen">
                <img className="gatitos_asociados" src={prop.photo} alt="gatito" />
            </div>
         
         <div className="abajo_imagen">
            <div className="beds_host">

                {prop.superHost && <span className="superhost">SUPER HOST</span>}

                
                <p className="apartment" >{prop.type}. {prop.beds} beds</p>
            </div>
            <div className="estrella_puntaje">
                <img src="src/Componentes/img/estrella.png"/>
                <p className="description">{prop.rating}</p>
            </div>
         </div>
         <div>
            <p className="description">{prop.title}.</p>
         </div>
         
        </div>
    )
}
export default Card