const edad = +(process.argv[2]);
const genero = process.argv[3];
const aniosAporte = +(process.argv[4]);

function puedeJubilarse(edad, genero, aniosAporte) {
    function estaEnEdad(edad, genero) {
      switch (genero) {
        case 'F':
          return edad >= 60;
        case 'M':
          return edad >= 65;
        default:
          return false;
      }
    }
    
    function tieneSuficientesAportes(aniosAporte) {
      return aniosAporte >= 30;
    }
    
    return estaEnEdad(edad, genero) && tieneSuficientesAportes(aniosAporte);
  }

  
  console.log(puedeJubilarse(edad, genero, aniosAporte));