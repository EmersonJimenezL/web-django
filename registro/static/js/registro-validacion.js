function validacionDatos() {
    // Agrega el evento 'submit' al formulario
    document.getElementById('registro-form').addEventListener('submit', function(event) {
        event.preventDefault(); 

        // Obtiene los valores de los inputs
        const rut = document.getElementById("inputRut").value;
        const nombre = document.getElementById("inputNombre").value;
        const apellido = document.getElementById("inputApellido").value;
        const email = document.getElementById("inputEmail").value;
        const password = document.getElementById("inputPassword").value;
        const direccion = document.getElementById("inputDireccion").value;
        const region = document.getElementById("region").value;
        const comuna = document.getElementById("comuna").value;

        // Obtiene los elementos para mostrar los mensajes de error
        const mensaje_error_nombre = document.getElementById('mensaje-error-nombre');
        const mensaje_error_apellido = document.getElementById('mensaje-error-apellido');
        const mensaje_error_email = document.getElementById('mensaje-error-email');
        const mensaje_error_contrasenna = document.getElementById('mensaje-error-contrasenna');
        const mensaje_error_direccion = document.getElementById('mensaje-error-direccion');
        const mensaje_error_region = document.getElementById('mensaje-error-region');
        const mensaje_error_rut = document.getElementById('mensaje-error-rut');

        // Oculta los mensajes de error al inicio
        mensaje_error_nombre.style.display = 'none';
        mensaje_error_apellido.style.display = 'none';
        mensaje_error_email.style.display = 'none';
        mensaje_error_contrasenna.style.display = 'none';
        mensaje_error_direccion.style.display = 'none';
        mensaje_error_region.style.display = 'none';
        mensaje_error_rut.style.display = 'none';

        let isValid = true; // Bandera para verificar si el formulario es válido

        // Validación del RUT
        if (rut.trim() === '') {
            mensaje_error_rut.style.display = 'block';
            mensaje_error_rut.textContent = 'El campo no puede estar vacío!!.';
            isValid = false;
        } else if (rut.trim().length < 11 || rut.trim().length > 12) {
            mensaje_error_rut.style.display = 'block';
            mensaje_error_rut.textContent = 'Formato: xx.xxx.xxx-x';
            isValid = false;
        }

        // Validación del nombre
        if (nombre.trim() === '') {
            mensaje_error_nombre.style.display = 'block';
            mensaje_error_nombre.textContent = 'El campo no puede estar vacío!!.';
            isValid = false;
        } else if (nombre.trim().length < 3 || nombre.trim().length > 15) {
            mensaje_error_nombre.style.display = 'block';
            mensaje_error_nombre.textContent = 'Error de validación.';
            isValid = false;
        }

        // Validación del apellido
        if (apellido.trim() === '') {
            mensaje_error_apellido.style.display = 'block';
            mensaje_error_apellido.textContent = 'El campo no puede estar vacío!!.';
            isValid = false;
        } else if (apellido.trim().length < 3 || apellido.trim().length > 15) {
            mensaje_error_apellido.style.display = 'block';
            mensaje_error_apellido.textContent = 'Error de validación.';
            isValid = false;
        }

        // Validación del email
        if (email.trim() === '') {
            mensaje_error_email.style.display = 'block';
            mensaje_error_email.textContent = 'El campo no puede estar vacío!!.';
            isValid = false;
        } else if (email.trim().length < 15 || email.trim().length > 254) {
            mensaje_error_email.style.display = 'block';
            mensaje_error_email.textContent = 'El correo debe tener entre 15 y 254 caracteres.';
            isValid = false;
        }

        // Validación de la contraseña
        if (password.trim() === '') {
            mensaje_error_contrasenna.style.display = 'block';
            mensaje_error_contrasenna.textContent = 'El campo no puede estar vacío!!.';
            isValid = false;
        } else if (password.trim().length < 5 || password.trim().length > 15) {
            mensaje_error_contrasenna.style.display = 'block';
            mensaje_error_contrasenna.textContent = 'La contraseña debe tener entre 5 y 15 caracteres.';
            isValid = false;
        } else if (!/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
            mensaje_error_contrasenna.style.display = 'block';
            mensaje_error_contrasenna.textContent = 'Tu contraseña debe contener tanto números como letras.';
            isValid = false;
        }

        // Validación de la dirección
        if (direccion.trim() === '') {
            mensaje_error_direccion.style.display = 'block';
            mensaje_error_direccion.textContent = 'El campo no puede estar vacío!!.';
            isValid = false;
        } else if (direccion.trim().length < 4 || direccion.trim().length > 20) {
            mensaje_error_direccion.style.display = 'block';
            mensaje_error_direccion.textContent = 'Error de validación';
            isValid = false;
        } else if (!isNaN(direccion)) {
            mensaje_error_direccion.style.display = 'block';
            mensaje_error_direccion.textContent = 'Error de validación';
            isValid = false;
        }

        // Validación de la región y comuna
        if (region === '' || comuna === '') {
            mensaje_error_region.style.display = 'block';
            mensaje_error_region.textContent = 'Error de validación';
            isValid = false;
        }

        // Si todas las validaciones pasan, se envía el formulario
        if (isValid) {
            this.submit();
        }
    });
}

// Llama a la función de validación al cargar la página
window.onload = validacionDatos;
