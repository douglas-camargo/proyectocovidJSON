const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const cedula = document.getElementById("rif")
const Cargo = document.getElementById("cargo")
const datoNombre = sessionStorage.getItem("name")
const datoApellido = sessionStorage.getItem("last_name")
const datoCedula = sessionStorage.getItem("rif")
const datoCargo = sessionStorage.getItem("cargo")
nombre.innerHTML = datoNombre;
apellido.innerHTML = datoApellido;
cedula.innerHTML = datoCedula;
Cargo.innerHTML = datoCargo;

let lista = document.getElementById("listapokemon")
function consultarpokemon(id, num) {
fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
.then(function (respuesta) {
    respuesta.json()
   .then(function(pokemon) {
        crearpokemon(pokemon, num)   
    })
        
    })
}
//pokemones(807)//hay solo 807 pokemones en la api

function consultarpokemones() {
    let primerid = Math.round(Math.random() * 807)
    let segundoid = Math.round(Math.random() * 807)
    let tercerid = Math.round(Math.random() * 807)
    let cuartoid = Math.round(Math.random() * 807)
    
    
    consultarpokemon(primerid, 1)
    consultarpokemon(segundoid, 2)
    consultarpokemon(tercerid, 3)
    consultarpokemon(cuartoid, 4)
}

 function crearpokemon(pokemon, num){

    let item = lista.querySelector(`#pokemon-${num}`)
    let imagen = item.getElementsByTagName("img")[0]
    imagen.setAttribute("src", pokemon.sprites.front_default)

    let nombre = item.getElementsByTagName("p")[0]
    //nombre.textContent = pokemon.name
    nombre.innerHTML = pokemon.name
    


 }
  consultarpokemones()
