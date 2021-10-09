const { mensaje } = require('../functions/functions.mensaje.js')
const { capitalize } = require('../functions/functions.js')
const path = require('path')
module.exports = {
    nombre: 'unidad',
    descripcion: 'Mostrará la unidad respectiva que se llame con toda la información correspondiente.',
    execute(message, datos, nombre_llamado) {
        let nombres = `Unidad llamada con los sig. nombres: ${capitalize(datos[5][0])}`, 
            temporada
        for (let i = 1; i < datos[5].length; i++)
            nombres = nombres + `, ${capitalize(datos[5][i])}`
        if (datos[3].length > 1)
            temporada = {name: 'Temporada', value: `${capitalize(datos[3])}`, inline: true}
        else
            temporada = {name: 'Temporada', value: 'No incluye', inline: true}
        let msj = mensaje(`${capitalize(nombre_llamado)}`, `${nombres}\n**${datos[0]}**`, [
            {name: 'Liderazgo', value: `${datos[1]}`, inline: true},
            {name: 'Liderazgo 100%-16%', value: `${datos[2]}`, inline: true},
            temporada
        ], path.join(__dirname, `../images/unidades/${datos[5][0]}`), '1.png', '2.png')
        message.channel.send(msj).catch(e => {console.log(`${e}`)})
    }
}