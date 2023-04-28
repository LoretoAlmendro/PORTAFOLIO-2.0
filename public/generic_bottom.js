
const boton = document.getElementsByClassName('generic_btn');
const enlace = document.getElementsByClassName('generic_btn_title');
let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

for (let i = 0; i < boton.length; i++) {
  let botonArray = boton[i]
  console.log(botonArray)
  botonArray.addEventListener('mouseover', (event) => {
    let hoverBtn = event.target
    console.dir(hoverBtn);

    hoverBtn.children[0].style.color = 'white'; // cambia el color del enlace al hacer hover

  })
  botonArray.addEventListener('mouseout', (event) => {
    let hoverBtn = event.target
    console.dir(hoverBtn);
    /*let tono=hoverBtn.closest(".generic_btn_title");
    console.log(tono);*/

    hoverBtn.children[0].style.color = 'black'; // cambia el color del enlace al hacer hover

  })

  botonArray.addEventListener('click', e => {

    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hex[randomNumber()]
    }
    e.target.style.background = color;

  })
}

function randomNumber() {
  return Math.floor(Math.random() * hex.length)
}

/*let tono=hoverBtn.closest(".generic_btn_title");
console.log(tono);*/
/* boton.addEventListener('hover', function() {
}); */


/*Evento onclick footer*/



/* // Send data after the button is clicked
categoryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let inputName = categoryForm.elements["category"].value;
  const data = { name: inputName };
 */

/*Evento onclick formulario vinculaci[on tablas*/
let formularioDatos = document.getElementById("formularioDatos");
formularioDatos.addEventListener('submit', (event) => {
  event.preventDefault();
  let inputNombre = formularioDatos.elements["nombre"].value;
  let inputApellido = formularioDatos.elements["apellido"].value;
  let inputMail = formularioDatos.elements["mail"].value;
  let inputFormacion = formularioDatos.elements["formacion"].value;
  let inputEdad = formularioDatos.elements["edad"].value;
  let inputComuna = formularioDatos.elements["comuna"].value;
  let opcionSeleccionada = selectorRegion.options[selectorRegion.selectedIndex]
  let opcionSeleccionadaValor = parseInt(opcionSeleccionada.value)
  (console.log (opcionSeleccionadaValor))
  let inputEstudiante = formularioDatos.elements["estudiante"].value;
  

  const data = {
    nombre: inputNombre,
    apellido: inputApellido,
    mail: inputMail,
    formacion: inputFormacion,
    edad:inputEdad,
    comuna:inputComuna,
    regionId: opcionSeleccionadaValor,
    estudiante: inputEstudiante
};

async function postJSON(data) {
  try {
    const response = await fetch("http://localhost:3001/api/persona", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    // Hacer algo con la respuesta...
  } catch (error) {
    console.error(error);
  }
}

postJSON(data);

});
