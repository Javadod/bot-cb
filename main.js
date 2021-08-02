const Discord = require('discord.js')
const client = new Discord.Client()
const message = new Discord.Message()
const fs = require('fs')
require('dotenv').config()
const { buscar_unidad } = require('./src/functions/functions.datos.js')

const prefijo = '*'

client.commands = new Discord.Collection()

const comandos = fs.readdirSync('./src/commands/').filter(archivo => archivo.endsWith('.js'))
for (const archivo of comandos) {
    const comando = require('./src/commands/' + archivo)
    client.commands.set(comando.nombre, comando)
}



client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})



client.on('message', msg => {
    if (!msg.content.startsWith(prefijo) || msg.author.bot)
        return
    const args = msg.content.slice(prefijo.length).split(/ +/)
    const comando = args.shift().toLowerCase()
    const comando_unidad = msg.content.slice(prefijo.length)

    if (comando === 'unidades')
        client.commands.get('unidades').execute(msg, client)
    else if (['infantería', 'infanteria', 'melee'].find(palabra => {return palabra === comando}))
        client.commands.get('infanteria').execute(msg)
    else if (['caballeria', 'caballería', 'caballo'].find(palabra => {return palabra === comando}))
        client.commands.get('caballeria').execute(msg)
    else if (['distancia', 'rango'].find(palabra => {return palabra === comando}))
        client.commands.get('distancia').execute(msg)
    else {
        let unidad = buscar_unidad(comando_unidad)
        if (unidad.length !== 0)
            client.commands.get('unidad').execute(msg, unidad, comando_unidad)
    }
})

client.login(process.env.TOKEN_DISCORD)