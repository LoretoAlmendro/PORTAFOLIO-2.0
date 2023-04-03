
const boton = document.getElementsByClassName('generic_btn');
const enlace = document.getElementsByClassName('generic_btn_title');
let hex= [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

for (let i=0;i<boton.length; i++){
  let botonArray=boton[i]
  console.log(botonArray)
  botonArray.addEventListener('mouseover',(event)=>{
 let hoverBtn=event.target
 console.dir(hoverBtn);
 
 hoverBtn.children[0].style.color = 'white'; // cambia el color del enlace al hacer hover
 
})
botonArray.addEventListener('mouseout',(event)=>{
  let hoverBtn=event.target
  console.dir(hoverBtn);
  /*let tono=hoverBtn.closest(".generic_btn_title");
  console.log(tono);*/
  
  hoverBtn.children[0].style.color = 'black'; // cambia el color del enlace al hacer hover
  
})

botonArray.addEventListener('click', e => {
  
  let color= "#";
  for(let i=0; i<6; i++){
    color += hex[randomNumber()]
  }
  e.target.style.background = color;
  
})
}

function randomNumber(){
  return Math.floor(Math.random()* hex.length)
}

/*let tono=hoverBtn.closest(".generic_btn_title");
console.log(tono);*/
/* boton.addEventListener('hover', function() {
}); */


  

