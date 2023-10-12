//import nav from "./nav";



(()=>{
  

    const botonAdd = document.querySelector('[data-form-btn]');
    const crearTarea = (evento)=>{
        evento.preventDefault();
        const inputDataComentario = document.querySelector('[data-form-comentario]')
        const valorIn = inputDataComentario.value;
        const boxComentarios = document.querySelector('[data-list-comentarios]') 

        inputDataComentario.value = '';

        const label = document.createElement('label');
        label.innerText = valorIn;
        label.classList.add('label')
        
        boxComentarios.appendChild(label)
    }

    botonAdd.addEventListener('click', crearTarea)

})();
