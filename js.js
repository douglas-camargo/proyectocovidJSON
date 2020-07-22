//document.querySelector('#aaceder').addEventListener('click',esValido; //Devuelve el primer elemento del documento que se seleccione y registra un evento en este caso el click

 function validacioon() {
  let datos = {"cedulas":["25000111", "21000222", "22444333", "23222333", "25111222"]};
  let cedula = document.getElementById("cedulaaa").value; //permite el acceso a un elemento por su id
  var arrays = Object.values(datos)[0];
  return arrays.includes(cedula)
  } 
  
  function esValido() {
   let valides = validacioon()
   if (valides === true){
    window.location.assign('pagina3.html'); //redirecciona una pagina;
    event.preventDefault();//Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento
    }
    else{
    alert("incorrecto")
}
}