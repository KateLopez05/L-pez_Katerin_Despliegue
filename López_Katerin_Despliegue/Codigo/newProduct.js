function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var precio = document.getElementById('precio').value;
    var inventario = document.getElementById('inventario').value;

    if (nombre === '' || precio === '' || inventario === '') {
        alert('Por favor, completa todos los campos.');
        return false; // Evita que el formulario se envíe si no está completo
    } else {
        alert('El producto ha sido creado exitosamente.');
        return true; // Permite que el formulario se envíe si está completo
    }
}
