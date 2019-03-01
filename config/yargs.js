const opts = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    },
    completado: {
        default: true,
        alias: 'c',
        desc: 'Marca como completado o pendiente la tarea'
    },
    borrar: {
        default: true,
        alias: 'd',
        desc: 'Borra una tarea'
    }

}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', opts)
    .command('actualizar', 'Actualiza el estado completado de una tarea', opts)
    .command('borrar', 'Eliminaste una tarea', opts)
    .help()
    .argv; //Retornar la constante 

module.exports = {
    argv

}