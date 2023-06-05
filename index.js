function puedeJubilarse(edad, genero, aniosAporte){

    if (edad >= 65 && genero == "Masculino" && aniosAporte >= 30){
        return "Tenés todo en regla. Podés jubilarte.";
    }else if (edad >= 60 && genero == "Femenino" && aniosAporte >= 30){
        return "Tenés todo en regla. Podés jubilarte.";
    }else{
        return "No podés jubilarte."
    }
    }

    module.exports = puedeJubilarse