function validarDatos() {
    const nombre = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const asunto = document.getElementById('asunto').value;
    const descripcion = document.getElementById('descripcion').value;

    const mensaje_error_nombre = document.getElementById('mensaje-error-nombre');
    const mensaje_error_email = document.getElementById('mensaje-error-email');
    const mensaje_error_asunto = document.getElementById('mensaje-error-asunto');
    const mensaje_error_descripcion = document.getElementById('mensaje-error-descripcion');

    // Resetear mensajes de error
    mensaje_error_nombre.style.display = 'none';
    mensaje_error_email.style.display = 'none';
    mensaje_error_asunto.style.display = 'none';
    mensaje_error_descripcion.style.display = 'none';

    // Validación del nombre
    if (nombre.trim() == '') {
        mensaje_error_nombre.style.display = 'block';
        mensaje_error_nombre.textContent = '¡El campo no puede estar vacío!';
    } else if (nombre.trim().length < 10) {
        mensaje_error_nombre.style.display = 'block';
        mensaje_error_nombre.textContent = '¡El campo debe contener su nombre completo!';
    }

    // Validación del email
    if (email.trim() == '') {
        mensaje_error_email.style.display = 'block';
        mensaje_error_email.textContent = '¡El campo no puede estar vacío!';
    }

    // Validación del asunto
    if (asunto.trim() == '') {
        mensaje_error_asunto.style.display = 'block';
        mensaje_error_asunto.textContent = '¡El campo no puede estar vacío!';
    }

    // Validación de la descripción
    if (descripcion.trim() == '') {
        mensaje_error_descripcion.style.display = 'block';
        mensaje_error_descripcion.textContent = '¡El campo no puede estar vacío!';
    } else if (descripcion.trim().length > 50) {
        mensaje_error_descripcion.style.display = 'block';
        mensaje_error_descripcion.textContent = '¡La descripción no puede superar los 50 caracteres!';
    }
}
