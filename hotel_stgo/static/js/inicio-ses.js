function obtenerDatos() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("pass").value;

    const mensaje_error_email = document.getElementById('mensaje-error-email');
    const mensaje_error_password = document.getElementById('mensaje-error-password');

    // Resetear mensajes de error
    mensaje_error_email.style.display = 'none';
    mensaje_error_password.style.display = 'none';

    console.log(email, password);

    // Validación del email
    if (email.trim() === "") {
        mensaje_error_email.style.display = 'block';
        mensaje_error_email.textContent = '¡Error, el campo no puede estar vacío!';
    } else if (email.trim().length < 3) {
        mensaje_error_email.style.display = 'block';
        mensaje_error_email.textContent = '¡Error en las credenciales de inicio!';
    }

    // Validación de la contraseña
    if (password.trim() === "") {
        mensaje_error_password.style.display = 'block';
        mensaje_error_password.textContent = '¡Error, el campo no puede estar vacío!';
    }
}
