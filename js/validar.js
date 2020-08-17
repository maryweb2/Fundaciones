function validar() {
    var nombre, apellido, numero, fechactual, fechaobtenida, mes, dia, f, checked1, checked2;

    nombre = document.getElementById("formnombre").value;
    apellido = document.getElementById("formapellido").value;
    numero = document.getElementById("select").value;
    fechaobtenida = document.getElementById("formfecha").value;
    checked1 = document.getElementById("defaultCheck1").checked;
    checked2 = document.getElementById("defaultCheck2").checked;
   
    
    f = new Date();

    mes = (f.getMonth() + 1).toString();
    if (mes.length <= 1){
        mes = "0" + mes;
    }
    dia = f.getDate().toString();
    if (dia.length <= 1){
        dia = "0" + dia;
    }
    
    fechactual = f.getFullYear() + "-" + mes + "-" + dia;
    
    if (document.fvalida.nombre.value.length == 0) {
        alert("Digite su nombre");
        document.fvalida.nombre.focus();
        return false;
    }
    else if (nombre.length > 20) {
        alert("El nombre es muy largo");
        document.fvalida.nombre.focus();
        return false;
    }
    else if (document.fvalida.apellido.value.length == 0) {
        alert("Digite su apellido");
        document.fvalida.apellido.focus();
        return false;
    }
    else if (apellido.length > 20) {
        alert("El apellido es muy largo");
        document.fvalida.apellido.focus();
        return false;
    }
    else if (numero == "0") {
        alert("Seleccione el número de evento");
        return false;
    }
    else if (document.fvalida.fecha.value.length == 0) {
        alert("Digite la fecha de nacimiento");
        document.fvalida.fecha.focus();
        return false;
    }
    else if (fechaobtenida > fechactual) {
        alert("Digite una fecha válida de nacimiento");
        document.fvalida.fecha.focus();
        return false;
    }
    else {
        var email = document.fvalida.email.value;
        emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (!emailRegex.test(email)) {
            alert('Ingrese un correo electrónico válido');
            document.fvalida.email.focus();
            return false;
          }
    }

    if (document.fvalida.inlineRadioOptions.value != "Masculino" && document.fvalida.inlineRadioOptions.value != "Femenino") {
        alert("Seleccione su género");
        return false;
    }
   
    if ((checked1 == "") && (checked2 == "") ) {
        alert("¿Por qué le gustaría participar en este evento?");
        return false;
    }
     
    document.fvalida.edad.value = calcularEdad(fechaobtenida);
}

function calcularEdad(fecha) {
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
}

function limpiarFormulario() {
    document.getElementById("contact_form").reset();
     }