const { mensaje } = require('../functions/functions.mensaje.js')
const { caballeria } = require('../functions/functions.datos.js')
const { mostrar_por_color } = require('../functions/functions.imprimir.js')
const path = require('path')
module.exports = {
    nombre: 'unidad',
    descripcion: 'Mostrará la unidad respectiva que se llame con toda la información correspondiente.',
    execute(message, datos, nombre_llamado) {
        let nombres = `Unidad llamada con los sig. nombres: ${datos[5][0]}`, 
            temporada
        for (let i = 1; i < datos[5].length; i++)
            nombres = nombres + `, ${names}`
        if (datos[3].length > 1)
            temporada = {name: 'Temporada', value: `${datos[3]}`, inline: true}
        else
            temporada = {name: 'Temporada', value: 'No incluye', inline: true}
        let msj = mensaje(`${nombre_llamado}`, `${nombres}\n**${datos[0]}**`, [
            {name: 'Liderazgo', value: `${datos[1]}`, inline: true},
            {name: 'Liderazgo 100%-16%', value: `${datos[2]}`, inline: true},
            temporada
        ])
        message.channel.send(msj)
        message.channel.send({files: [path.join(__dirname, `../images/${datos[4]}`)]})
            .catch(e => {console.log(`Error en capturar la imágen de: ${datos[5][0]}`)})
    }
}