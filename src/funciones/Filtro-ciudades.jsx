import Hospitalidades from '../../lista/stays.json'

const ExportarFiltroCiudades = (prop) =>{
    const FiltroDeCiudades = Hospitalidades.filter(function(element) {
        return element.city == prop;
      });
      return FiltroDeCiudades
} 
export default ExportarFiltroCiudades