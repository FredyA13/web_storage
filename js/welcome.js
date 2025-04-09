//Variable de encabezado a cambiar segun sea el caso
let encabezado1 = document.getElementsByTagName("h1").item(0);

//Variable del boton Eliminar
let btnEliminar = document.getElementById("eliminarName");

//Funcion para eliminar el nombre
function deleteName(event){
    event.preventDefault();
    //Elimina el valor de clave email
    localStorage.removeItem("Name");
}

//Evento a llamar con "click" usando el boton
btnEliminar.addEventListener("click", deleteName);

//CONDICION PARA SABER SI EXISTE LA LLAVE EN EL "localStorage"
if(localStorage.getItem("Name") !=null){
    let name = localStorage.getItem("Name");
    encabezado1.innerText = `Hola. ${name} bienvenido/a de nuevo`;
    console.log(`Hola. ${name} bienvenido/a de nuevo`);
}else{
    encabezado1.innerText = `Por favor ve al index e ingresa tu nombre`;
}//!=null


//PRIMERA PRUEBA FUNCIONAL
// btnEliminar.addEventListener("click", function(event){
//     event.preventDefault();
//     //Elimina el valor de clave email
//     localStorage.removeItem("Name");
// });