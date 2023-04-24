let datosForm = document.getElementById("formularioDatos");

// Envío de datos con click boton submit
datosForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let inputNombre = datosForm.elements["nombre"].value;
    let inputApellido = datosForm.elements["apellido"].value;
    let inputFormacion = datosForm.elements["formacion"].value;
    let inputEdad = datosForm.elements["edad"].value;
    let inputComuna = datosForm.elements["comuna"].value;
    let inputRegion = datosForm.elements["region"].value;
    let inputEstudiante = datosForm.elements ["estudiante"].value

    const dataPersona = { nombre: inputNombre, apellido: inputApellido, formacion: inputFormacion, edad: inputEdad, estudiante: inputEstudiante };
    const dataComuna = {nombre: inputComuna};
    const dataRegion = {name: inputRegion};

    if (inputNombre == '' || inputApellido == '' || inputEdad == '' ||  inputFormacion == '' || inputEstudiante =='' || inputComuna == '' || inputRegion == '') {
      alert('Llenar campos');
    } else {
      async function postJSON(dataPersona) {
        try {
          const responsePersona = await fetch("http://localhost:3000/person", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataPersona),
          });
          const responseComuna = await fetch("http://localhost:3000/comuna", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataComuna),
          });
          const responseRegion = await fetch("http://localhost:3000/region", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataRegion),
          });
          const result = await response.json();
          console.log("Success: ", result);
          if (result) {
            alert('Agregado con exito');
          }
        } catch (error) {
          console.error("Error: ", error);
        }
      }
      postJSON(dataPersona, dataComuna, dataRegion);
    }
  });
  