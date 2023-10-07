// let nombre3 = "Marta";

// var nombre1 = "Marta";

// const nombre2 = "Marta";
// console.log(nombre3);
// console.log(nombre1);
// console.log(nombre2);
// const form = document.getElementById("form");
// const nombre = document.getElementById("nombre");
// const parrafo = document.getElementById("alertas");

// function validarFormulario() {
//   let warnings = "";
//   let valido = true;
//   parrafo.innerHTML = "";

//   if (nombre.value.length < 4) {
//     warnings += `El nombre debe contener más de 4 carcateres`;
//     valido = false;
//   }

//   if (!valido) {
//     parrafo.innerHTML = warnings;
//   } else {
//     parrafo.innerHTML = "Enviado";
//   }
//   return valido;
// }

// form.addEventListener("submit", (e) => {
//   if (validarFormulario()) {
//     // Si la validación es exitosa, puedes enviar el formulario
//     formulario.submit();
//   } else {
//     e.preventDefault(); // Evita que el formulario se envíe automáticamente
//   }
// });

//condicionales
let contenidoTitulo = "Nombre";

let titulo = document.querySelector('#encabezado')
titulo.innerHTML = contenidoTitulo;

let textotitulo = titulo.innertext;
console.log(textoTitulo);

if (textotitulo == "Nombre") {
  titulo.innerHTML ="otro";
} else {
  console.log ("no se cumple");
}
