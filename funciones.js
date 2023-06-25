

function borderRed(elemento){
    elemento.style.border = '1px solid red';
}

function validarEmail(elemento){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(elemento);
}

function restablecer(){
    var elementos = document.getElementsByTagName('input');
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].style.borderColor = '';
    }
    var elemento = document.getElementById('obras_sociales');
    elemento.style.borderColor = '';
}

function esBisiesto(){
    if (anio % 400 === 0) {
        return true;
    } else if (anio % 100 === 0) {
        return false;
    } else if (anio % 4 === 0) {
        return true;
    } else {
        return false;
    }
}



function validar(){

    //restablecemos los estilos.
    restablecer();

    //Busca los elementos por ID.
    var nombre = document.getElementById('nombre');
    var apellido = document.getElementById('apellido');
    var email = document.getElementById('email');
    var obras_sociales = document.getElementById('obras_sociales');
    var dia = document.getElementById('dia');
    var mes = document.getElementById('mes');
    var anio = document.getElementById('anio');
    var Errores = true;
    
    //Pasa los valores a las variables.
    var nombreValue = nombre.value;
    var apellidoValue = apellido.value;
    var emailValue = email.value;
    var obras_socialesValue = obras_sociales.value;
    var diaValue = dia.value;
    var mesValue = mes.value;
    var anioValue = anio.value;

    //Momento de validar los campos.
    
    //NOMBRE...
    if (nombreValue === '') {
        borderRed(nombre);
        Errores = false;
    }

    //APELLIDO...
    if (apellidoValue === '') {
        borderRed(apellido);
        Errores = false;
    }

    //EMAIL...
    if (emailValue === '') {
        borderRed(email);
        Errores = false;
    }

    //OBRAS SOCIALES...
    if (obras_socialesValue === '') {
        borderRed(obras_sociales);
        Errores = false;
    }

    //FECHA DE NACIMIENTO...

    //DIA...
    if (diaValue === '') {
        borderRed(dia);
        Errores = false;
    }

    if (!isNaN(diaValue) && diaValue >= 1 && diaValue <= 31) {
        switch (mesValue) {
            case '2':
                if (diaValue > 29 || (diaValue === 29 && !esBisiesto(anioValue))) {
                    borderRed(dia);
                    Errores = false;
                }
                break;
            case '4':
            case '6':
            case '9':
            case '11':
                if (diaValue === 31) {
                    borderRed(dia);
                    Errores = false;
                }
                break;
            default:
                break;
        }
    } else {
        borderRed(dia);
        Errores = false;
    }
    
    //MES...
    if (mesValue === '' || mesValue < 1 || mesValue > 12 || isNaN(mesValue)) {
        borderRed(mes);
        Errores = false;
    }

    //AÑO...
    if (anioValue === '' || anioValue < 1900 || anioValue > 2023 || isNaN(anioValue)) {
        borderRed(anio);
        Errores = false;
    }

    //MAIL...
    if (!validarEmail(document.getElementById('email').value)) {
        borderRed(email);
        Errores = false;
    }

    //Y si todo es correcto se da la alerta de que fue enviado.
    if (Errores) {
        alert("Los datos son correctos, fueron enviados :).");
    }
}