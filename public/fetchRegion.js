let datosForm = document.getElementById("formularioDatos");

// Envío de datos con click boton submit
datosForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let inputComuna = datosForm.elements["comuna"].value;
    const data = { nombre: inputComuna };
    
    if (inputNombre == '') {
      alert('Llenar campos');
    } else {
      async function postJSON(data) {
        try {
          const response = await fetch("http://localhost:3000/comuna", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
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
      postJSON(data);
    }
  });
  