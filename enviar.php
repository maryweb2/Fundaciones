<?php
//Llenado de los campos
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$evento = $_POST['numeroevento'];
$fechanacimiento = $_POST['fecha'];
$correo = $_POST['email'];
$genero = $_POST['inlineRadioOptions'];
$edad = $_POST['edad'];


//Datos para el correo
$destinatario = $_POST['email'];

$asunto = "Fundaciones de Costa Rica - Registro de evento";

$body = "CONFIRMACIÓN DE REGISTRO DEL EVENTO - FUNDACIONES DE COSTA RICA \n\n";
$body .= "Datos personales: \n\n";
$body .= "Nombre: $nombre $apellido \n";
$body .= "Número del evento: $evento \n";
$body .= "Edad: $edad \n";
$body .= "Género: $genero \n";

mail ($destinatario, $asunto, $body);

echo '<script>
    alert ("Registro completado exitosamente");
    window.history.go(-1);
    </script>';
?>

