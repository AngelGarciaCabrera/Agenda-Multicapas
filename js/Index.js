
function llenartabla(){
    fetch('http://www.raydelto.org/agenda.php')
    .then((respuesta) =>{
        return respuesta.json();
    }).then((respuesta)=>{
        respuesta.forEach(user => {
            const markup =`<tr>
            <th scope="row"></th>
            <td>${user.nombre}</td>
            <td>${user.apellido}</td>
            <td>${user.telefono}</td>
          </tr>`;
          document.querySelector('tbody').insertAdjacentHTML('beforeend',markup);
        })
    })
}
llenartabla();



const fomulario= document.getElementById("fomulario1");




fomulario.addEventListener('submit',function(e){
    e.preventDefault();
   
    const GuardarDato={
        nombre: fomulario["nombre"].value,
        apellido: fomulario["apellido"].value ,
        telefono: fomulario["telefono"].value ,
    }
   
    debugger
    fetch('http://www.raydelto.org/agenda.php',{
        method: 'POST',
        body: JSON.stringify(GuardarDato)

    })
    alert("mandado correctamente");

 })


 recargar.addEventListener('click',function(){
    const recargar = document.getElementById("gato");
    recargar.innerHTML="";   
    llenartabla();
    
 })