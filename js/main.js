//Variable del boton Guardar
let btnGuardar = document.getElementById("guardarName");

//Funcion para guarda el nombre
function saveName(event){
    event.preventDefault();
    let name = document.getElementById("txtName").value;
    localStorage.setItem("Name", name);
    console.log(`Nombre ingresado: ${name}`);
}

//Evento a llamar con "click" usando el boton
btnGuardar.addEventListener("click", saveName);


//PRIMERA PRUEBA FUNCIONAL
// btnGuardar.addEventListener("click", function(event){
    
//     event.preventDefault();
//     let name = document.getElementById("txtName").value;
//     localStorage.setItem("Name", name);
    
// });
