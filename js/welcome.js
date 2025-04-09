let encabezado1 = document.getElementsByTagName("h1").item(0);
let btnEliminar = document.getElementById("eliminarName");

if(localStorage.getItem("Name") !=null){
    let name = localStorage.getItem("Name");
    encabezado1.innerText = `Hola. ${name} bienvenido/a de nuevo`;
    console.log(name);

}else{
    encabezado1.innerText = `Por favor ve al index e ingresa tu nombre`;
}//!=null

btnEliminar.addEventListener("click", function(event){
    event.preventDefault();
    //Elimina el valor de clave email
    localStorage.removeItem("Name");
});