import Hospitalidades from "../../lista/stays.json"

const CiudadesParaNav = [];

  Hospitalidades.filter(function(element) {
    if (!CiudadesParaNav.includes(element.city)) {// Includes busca si un elemento coincide si coincide va a dar true sino va a dar un false. Como lo estoy negando con el simbolo "!" Me va a dar true si no coincide. 
      CiudadesParaNav.push(element.city)
      return true // Con true filter lo evalua o lo guarda
    }
    return false // Como no entra al if por no cumplir con el la negacion "!". Yo le paso un false a filter para que no ejecute, evalue o guarde nada. 
  });
  
export default CiudadesParaNav