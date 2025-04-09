let btnGuardar = document.getElementById("guardarName");

btnGuardar.addEventListener("click", function(event){
    
    event.preventDefault();
    let name = document.getElementById("txtName").value;
    localStorage.setItem("Name", name);
    
});
