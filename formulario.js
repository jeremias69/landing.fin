const formulario = document.getElementById('formulario');

let usuarios = [];

const validar = ( nombre, apellido, fechaDeNacimiento, telefono ) => {

    const retorno = { estado: false };
    
    if ( nombre == undefined || nombre == '' ) {
        return {
            ...retorno,
            mensaje: 'El nombre es requerido',
        }
    }
    if ( apellido == undefined || apellido == '' ) {
        return {
            ...retorno,
            mensaje: 'El apellido es requerido',
        }
    }
    if ( fechaDeNacimiento == undefined || fechaDeNacimiento == '' ) {
        return {
            ...retorno,
            mensaje: 'La fecha es requerida',
        }
    }
    if ( telefono == undefined || telefono == '' ) {
        return {
            ...retorno,
            mensaje: 'El telefono es requerido',
        }
    }
    return {
        ...retorno,
        estado: true
    }
}

function cargarDatos() {
    if (usuarios.length > 0) {
        let usuariosHTML = '<table border="1">\n';
        usuariosHTML += '<thead>\n';
        usuariosHTML += '<tr>\n';
        usuariosHTML += '<th>Nombres</th>\n';
        usuariosHTML += '<th>Apellidos</th>\n';
        usuariosHTML += '<th>Fecha de nacimiento</th>\n';
        usuariosHTML += '<th>Telefono</th>\n';
        usuariosHTML += '</tr>\n';
        usuariosHTML += '</thead>\n';
        usuariosHTML += '<tbody>\n';

        for (let i = 0; i < usuarios.length; i++) {
            usuariosHTML += '<tr>\n';
            usuariosHTML += '<td>' + usuarios[i]['nombre'] + '</td>\n';
            usuariosHTML += '<td>' + usuarios[i]['apellido'] + '</td>\n';
            usuariosHTML += '<td>' + usuarios[i]['fecha'] + '</td>\n';
            usuariosHTML += '<td>' + usuarios[i]['telefono'] + '</td>\n';
            usuariosHTML += '</tr>\n';
        }
        usuariosHTML += '</tbody>\n';
        usuariosHTML += '</table>\n';

        document.getElementById('nombres').value = '';
        document.getElementById('apellidos').value = '';
        document.getElementById('fecha').value = '';
        document.getElementById('telefono').value = '';
        document.getElementById('registros').innerHTML = usuariosHTML;
    }

}
const guardarFormulario = () => {

    // Obtener datos del formulario
    const nombre = document.getElementById('nombres').value;
    const apellido = document.getElementById('apellidos').value;
    const fechaDeNacimiento = document.getElementById('fecha').value;
    const telefono = document.getElementById('telefono').value;
    const codigo = document.getElementById('codigo').value;

    const { estado, mensaje } = validar( nombre, apellido, fechaDeNacimiento, telefono );
    if ( estado ) {

        const usuario = {
            nombre: nombre,
            apellido: apellido,
            fecha: fechaDeNacimiento,
            telefono: `${codigo} ${telefono} `
        };
        usuarios.push(usuario);

        console.log(usuarios);
        var min = 000000000
        var max = 999999999
        let x = Math.floor(Math.random()*(max-min+1)+min);
        window.alert('Creacion de registro exitoso, tu codigo de descuento es: ' + x);
    } else {

        alert( mensaje );

    }

}

cargarDatos();
document.getElementById('btn-submit').addEventListener('click', (event) => {
    event.preventDefault();
    guardarFormulario();
    cargarDatos();
});