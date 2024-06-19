// RELIZAR VALIDACIONES NUEVAMENTE, REVISAR VARIABLES

function obtenerDatos() {

    // funcion funcion o evento, a traves del cual enviamos el formulario, una vez que las validaciones se encuentren ok. 

    document.getElementById('registro-form').addEventListener('submit', function(event) {
        event.preventDefault(); 

        // creamos variabes constantes para obtener el valor que se encuentra dentro de los inputs

        const nombre = document.getElementById("inputNombre").value;
        const apellido = document.getElementById("inputApellido").value;
        const email = document.getElementById("inputEmail").value;
        const password = document.getElementById("inputPassword").value;
        const direccion = document.getElementById("inputDireccion").value;
        const region = document.getElementById("region").value;
        const comuna = document.getElementById("comuna").value;

        // obtenemos los campos en los cuales se encuentran las etiquetas para lo mensajes

        const mensaje_error_nombre = document.getElementById('mensaje-error-nombre');
        const mensaje_error_apellido = document.getElementById('mensaje-error-apellido');
        const mensaje_error_email = document.getElementById('mensaje-error-email');
        const mensaje_error_contrasenna = document.getElementById('mensaje-error-contrasenna');
        const mensaje_error_direccion = document.getElementById('mensaje-error-direccion');
        const mensaje_error_region = document.getElementById('mensaje-error-region');

        // modificamos el display de las etiqutas para que no se vean

        mensaje_error_nombre.style.display = 'none';
        mensaje_error_apellido.style.display = 'none';
        mensaje_error_email.style.display = 'none';
        mensaje_error_contrasenna.style.display = 'none';
        mensaje_error_direccion.style.display = 'none';
        mensaje_error_region.style.display = 'none';

        // Validacion de los inputs 
        
        if(nombre.trim() == ''){
            mensaje_error_nombre.style.display = 'block'
            mensaje_error_nombre.textContent = 'El campo no puede estar vacio!!.'
        }else if (nombre.trim().length < 3 || nombre.trim().length > 15) {
            mensaje_error_nombre.style.display = 'block'
            mensaje_error_nombre.textContent = 'Error de validacion.'
        }

        if (apellido.trim()=='') {
            mensaje_error_apellido.style.display = 'block'
            mensaje_error_apellido.textContent = 'El campo no puede estar vacio!!.'
        }
        else if (apellido.trim().length < 3 || apellido.trim().length > 15) {
            mensaje_error_apellido.style.display = 'block'
            mensaje_error_apellido.textContent = 'Error de validacion.'
        }

        if (email.trim() == '') {
            mensaje_error_email.style.display = 'block'
            mensaje_error_email.textContent = 'El campo no puede estar vacio!!.'
        }
        else if (email.trim().length < 3 || email.trim().length > 20) {
            mensaje_error_email.style.display = 'block'
            mensaje_error_email.textContent = 'Error de validacion.'
        }
        
        if (password.trim() == '') {
            mensaje_error_contrasenna.style.display = 'block'
            mensaje_error_contrasenna.textContent = 'El campo no puede estar vacio!!.'
        }
        else if (password.trim().length < 5 || password.trim().length > 15) {
            mensaje_error_contrasenna.style.display = 'block'
            mensaje_error_contrasenna.textContent = 'La contraseña debe tener entre 5 y 15 caracteres.'
        }
        else if (!isNaN(password)) {
            mensaje_error_contrasenna.style.display = 'block'
            mensaje_error_contrasenna.textContent = 'Tu contraseña no solo debe contener numeros, tambien debe contener letras.'
        }

        if (direccion.trim() == '') {
                mensaje_error_direccion.style.display = 'block'
                mensaje_error_direccion.textContent = 'El campo no puede estar vacio!!.'
        } else if (direccion.trim().length < 4 || direccion.trim().length > 20) {
            mensaje_error_direccion.style.display = 'block'
            mensaje_error_direccion.textContent = 'Error de validacion'
        } else if (!isNaN(direccion)) {
            mensaje_error_direccion.style.display = 'block'
            mensaje_error_direccion.textContent = 'Error de validacion'
        }

        if(region == '' || comuna == ''){
            mensaje_error_region.style.display = 'block'
            mensaje_error_region.textContent = 'Error de validacion'
        }


        // validacion de que todos los datos del formulario se encuentren ok

        if (mensaje_error_nombre.style.display === 'none' &&
            mensaje_error_apellido.style.display === 'none' &&
            mensaje_error_email.style.display === 'none' &&
            mensaje_error_contrasenna.style.display === 'none' &&
            mensaje_error_direccion.style.display === 'none' && 
            mensaje_error_region.style.display === 'none') {
            this.submit(); // Envía el formulario
        }

    });
}