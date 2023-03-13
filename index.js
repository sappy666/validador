function validarForm(){
    let nombre = document.getElementById("nombre").value;
    let rut = document.getElementById("rut").value;
    let fechaNacimientoText = document.getElementById("fecha-nacimiento").value;
    let ahorro = document.getElementById("ahorro").value;
    let rangoRSH = document.getElementById("rango-rsh").value;

    const fechaActual = new Date();
    const fechaNacimiento = new Date(fechaNacimientoText);
    const edad = (fechaActual - fechaNacimiento);
    let validado = true;
    if(ahorro < 4){
        alert("Ahorro tiene que ser mayor a 4uf");
        validado = false;
    }
    if(rangoRSH > 70){
        alert("Debes pertenecer hasta el 70% mas vulnerable");
        validado = false;
    }
    if(edad < 568036800000){
        alert("Beneficiario debe ser mayor de edad");
        validado = false;
    }
    if(!rutValidado(rut)){
        alert("Rut debe ser valido para postular");
        validado = false;
    }
}
function rutValidado(r){
    // {rut sin dv, dv}
    let arregloRut = r.split("-");
    let suma = 0;
    let digito = 0;
    // console.log(arregloRut[0]);
    // console.log(arregloRut[1]);
    let arregloMulti = [2, 3, 4, 5, 6, 7, 2, 3, 4, 5, 6, 7];
    let arregloDigitos = arregloRut[0].split("").reverse();
    let resultado2 = 0;
    for(let i = 0; i < arregloDigitos.length; i++){
        suma += parseInt(arregloDigitos[i]) * parseInt(arregloMulti[i]);
    }
    resultado2 = Math.trunc(suma/11)*11;
    digito = 11-(suma-resultado2);
    if(digito == 11){
        digito = 0;
    }
    if(digito == 10){
        digito= "k";
    }
    return (digito == arregloRut[1]);
}

const btnEnviar = document.getElementById("btn-enviar");
btnEnviar.onclick = validarForm;