// Obtener referencias a los elementos del DOM
const nombreInput = document.getElementById("nombre");
const emailInput = document.getElementById("email");
const contrasenaInput = document.getElementById("contrasena");
const registroForm = document.querySelector("#registro form");
const btnCreateComment = document.querySelector(".btnCreate");
const comentarioInput = document.querySelector("[data-form-input]");

// Manejar el evento de envío del formulario de registro
registroForm.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombre = nombreInput.value;
  const email = emailInput.value;
  const contrasena = contrasenaInput.value;

  // Realizar validación y procesamiento del formulario (por ejemplo, enviar los datos al servidor).
  // Aquí puedes agregar la lógica para enviar los datos de registro al servidor si es necesario.

  // Limpia los campos del formulario después del envío
  nombreInput.value = "";
  emailInput.value = "";
  contrasenaInput.value = "";
});

// Manejar el evento de clic en el botón "Añadir Comentario"
btnCreateComment.addEventListener("click", (evento) => {
  evento.preventDefault();

  const comentario = comentarioInput.value;

  // Realizar validación y procesamiento del comentario.
  // Puedes agregar la lógica para mostrar el comentario en la página o enviarlo al servidor.

  // Limpia el campo de comentario después de agregarlo
  comentarioInput.value = "";
});

