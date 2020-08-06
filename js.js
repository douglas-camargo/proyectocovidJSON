//document.querySelector('#aaceder').addEventListener('click',esValido; //Devuelve el primer elemento del documento que se seleccione y registra un evento en este caso el click

 function validacioon() {
     let datos = {
      cedulas: [
      {name:"Pedro",apellido:"Angel",cargo:"Veterinario",pass:"25000111"},
      {name:"Carlos",apellido:"Perez",cargo:"Profesor",pass:"21000222"},
      {name:"Daniel",apellido:"Gomez",cargo:"Doctor",pass:"22444333"},
      {name:"Saul",apellido:"Gimenez",cargo:"Arquitecto",pass:"23222333"},
      {name:"Douglas",apellido:"Camargo",cargo:"ingeniero", pass:"25111222"}
         ],
       };
    const cedula = document.getElementById("cedulaaa").value; //permite el acceso a un elemento por su id
    const valido = datos.cedulas.filter((x) => x.pass === cedula)
    return valido
    }
  
    function esValido() {
      const valides = validacioon();
      //  console.log(valides[0].apellido)
      //  console.log(valides[0].pass)
      //  console.log(valides.length)
      if (valides.length === 1){
        event.preventDefault();
        sessionStorage.setItem('name',valides[0].name);
        sessionStorage.setItem('last_name',valides[0].apellido);
        sessionStorage.setItem('rif',valides[0].pass);
        sessionStorage.setItem('cargo',valides[0].cargo);
        window.location.assign('pagina3.html');
        
       }
       else{
       alert("incorrecto")
       }
      }