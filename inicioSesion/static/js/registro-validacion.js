// RELIZAR VALIDACIONES NUEVAMENTE, REVISAR VARIABLES

function obtenerDatos() {

    document.getElementById('registro-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById("inputNombre").value;
        const apellido = document.getElementById("inputApellido").value;
        const email = document.getElementById("inputEmail").value;
        const password = document.getElementById("inputPassword").value;
        const direccion = document.getElementById("inputDireccion").value;
        const region = document.getElementById("region").value;
        const comuna = document.getElementById("comuna").value;

        const mensaje_error_nombre = document.getElementById('mensaje-error-nombre');
        const mensaje_error_apellido = document.getElementById('mensaje-error-apellido');
        const mensaje_error_email = document.getElementById('mensaje-error-email');
        const mensaje_error_contrasenna = document.getElementById('mensaje-error-contrasenna');
        const mensaje_error_direccion = document.getElementById('mensaje-error-direccion');
        const mensaje_error_region = document.getElementById('mensaje-error-region');

        mensaje_error_nombre.style.display = 'none';
        mensaje_error_apellido.style.display = 'none';
        mensaje_error_email.style.display = 'none';
        mensaje_error_contrasenna.style.display = 'none';
        mensaje_error_direccion.style.display = 'none';
        mensaje_error_region.style.display = 'none';

        // Validar longitud del nombre de usuario
        if (nombre.trim().length < 3 || nombre.trim().length > 15) {
            mensaje_error_nombre.style.display = 'block'
            mensaje_error_nombre.textContent = 'Error de validacion.'
        }

        if (apellido.trim().length < 3 || apellido.trim().length > 15) {
            mensaje_error_apellido.style.display = 'block'
            mensaje_error_apellido.textContent = 'Error de validacion.'
        }

        if (email.trim().length < 3 || email.trim().length > 20) {
            mensaje_error_email.style.display = 'block'
            mensaje_error_email.textContent = 'Error de validacion.'
        }

        if (password.trim().length < 5 || password.trim().length > 15) {
            mensaje_error_contrasenna.style.display = 'block'
            mensaje_error_contrasenna.textContent = 'La contraseña debe tener entre 5 y 15 caracteres.'
        }

        if (!isNaN(password)) {
            mensaje_error_contrasenna.style.display = 'block'
            mensaje_error_contrasenna.textContent = 'Tu contraseña no solo debe contener numeros, tambien debe contener letras.'
        }

        if (direccion.trim().length < 4 || direccion.trim().length > 20) {
            mensaje_error_direccion.style.display = 'block'
            mensaje_error_direccion.textContent = 'Error de validacion'
        }

        if (!isNaN(direccion)) {
            mensaje_error_direccion.style.display = 'block'
            mensaje_error_direccion.textContent = 'Error de validacion'
        }

        if(region == '' || comuna == ''){
            mensaje_error_region.style.display = 'block'
            mensaje_error_region.textContent = 'Error de validacion'
        }



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