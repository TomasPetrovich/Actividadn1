let usuario; 
let contraseña; 

function usuarioInvalido() {
    return (usuario !== "tomas petrovich") || (contraseña !== "coderhouse");
}

function confirmarUsuario() {
    usuario = prompt("Ingrese su usuario");
    contraseña = prompt("Ingrese su contraseña");

    if (usuarioInvalido()) {
        alert("Usuario o contraseña incorrectos. Intente de nuevo.");
    } else {
        alert("Bienvenido");
    }
}

while (usuarioInvalido()) {
    confirmarUsuario();
    console.log(usuario);
    console.log(contraseña);
}

