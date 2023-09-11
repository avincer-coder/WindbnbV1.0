import Hospitalidades from '../../lista/stays.json'

const ExportarFiltroCiudades = (CiudadRecibida, NumeroDeGuests) =>{
    const FiltroDeCiudades = Hospitalidades.filter(function(element) {
        return element.city == CiudadRecibida && element.maxGuests >= NumeroDeGuests;
      })
      // const GuestsFilter = FiltroCiudades.filter(function(espacioCuartos){ return espacioCuartos.maxGuests => 5 MI DATO}) 
      return FiltroDeCiudades 
} 
export default ExportarFiltroCiudades