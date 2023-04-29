let eliminarBoton= document.getElementsByClassName("btn_delete")
    console.log (eliminarBoton);
    for (let i = 0; i < eliminarBoton.length;i++){
        let eliminarBotonArray= eliminarBoton[i]
        // console.log(eliminarBotonArray)
        eliminarBotonArray.addEventListener( "click", (event) =>{
            let clickBoton= event.target;
            console.log("clickBoton", clickBoton)
            let idSeleccion = clickBoton.closest(".eliminarFila").firstElementChild.innerText;
            console.log("idSeleccion", idSeleccion)
            let idSeleccionNumber = parseInt(idSeleccion)
            console.log(idSeleccionNumber);
            // console.log(clickboton);
            deletePersona(idSeleccionNumber);
        })
    }
    async function deletePersona(idSeleccionNumber) {
        try {
          const response = await fetch(`http://localhost:4001/api/region/${idSeleccionNumber}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          });
          if (response) {
            alert("Eliminado con éxito");
            location.reload();
          }
        } catch (error) {
          console.error("Error: ", error);
        }
      }


      //EDITAR PUT

        let formularioGuardar = document.getElementById("botonGuardar");
      formularioGuardar.addEventListener ("click", () =>{
        let editNombre = formularioGuardar.elements["nombre"].value;
        let editApellido =formularioGuardar.elements["apellido"].value;
        let editMail =formularioGuardar.elements["mail"].value;
        let editFormacion =formularioGuardar.elements["formacion"].value;
        let editEdad =formularioGuardar.elements["edad"].value;
        let editComuna =formularioGuardar.elements["comuna"].value;
       let editRegion = formularioGuardar.elements["region"].value
        let editEstudiante =formularioGuardar.elements["estudiante"].value;
        
      }) 



        let editarBoton= document.getElementsByClassName("editarFila")
    console.log (editarBoton);
     for (let i = 0; i < editarBoton.length;i++){
        let editarBotonArray= editarBoton[i]
        // console.log(eliminarBotonArray)
        editarBotonArray.addEventListener( "click", (event) =>{
            const elemento = document.getElementById('{{id}}');
            const valorId = elemento.id;
            console.log(valorId);
            let clickBoton= event.target;
            console.log("clickBoton", clickBoton)
            let idSeleccion = clickBoton.closest(".eliminarFila").firstElementChild.innerText;
            console.log("idSeleccion", idSeleccion)
            let idSeleccionNumber = parseInt(idSeleccion)
            console.log(idSeleccionNumber);
            // console.log(clickboton);
            editPersonaCard(idSeleccionNumber);

        })
    } 

       /*  const data = {
          nombre: editNombre,
          apellido: editApellido,
          formacion: editFormacion,
          edad:editEdad,
          comuna:editComuna,
          estudiante: editEstudiante,
          mail: editMail,
          regionId: editRegion
      };
      async function editPersonaCard(id, data) {
        try {
          const response = await fetch(`http://localhost:4001/api/actualizacion/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
          const result = await response.json();
          console.log("Success: ", result);
          if (result) {
            alert("Editado con exito");
            location.reload();
          }
        } catch (error) {
          console.error("Error: ", error);
        }
      }
     
      
        
    





 */