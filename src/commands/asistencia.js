const { proxima_guerra } = require('../functions/functions.js')
const { mensaje } = require('../functions/functions.mensaje.js')
const { ordenar_nombres, remover_elemento_lista } = require('../functions/functions.datos.js')
module.exports = {
    nombre: 'asistencia',
    descripcion: 'Desplegará un mensaje para confirmar la asistencia.',
    async execute(message, args, client, Message, channel_id) {
        let lista_usuarios = [['---'], ['---'], ['---']],
            lista_id = [['---'], ['---'], ['---']]
        let msj = mensaje('Asistencia', `Marcar asistencia para la guerra ${proxima_guerra()}`)
        msj.addFields(
            {name: 'Asisten', value: '---', inline: true},
            {name: 'No asisten', value: '---', inline: true},
            {name: 'Tal vez asistan', value: '---', inline: true}
        )
        message.channel.send(`@everyone`)
        let msg_embed = await message.channel.send(msj)
        msg_embed.react('✅')
        msg_embed.react('❎')
        msg_embed.react('❔')
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch()
            if (reaction.partial) await reaction.fetch()
            if (user.bot) return
            if (!reaction.message.guild) return
            if (reaction.message.channel.id == channel_id && msg_embed.id == reaction.message.id) {
                if (reaction.emoji.name === '✅') {
                    // console.log(reaction.users.cache.find(e => e.id == user.id))
                    // lista_id[0].push(user.id)
                    lista_usuarios[0].push(user.username)
                } else if (reaction.emoji.name === '❎') {
                    // lista_id[1].push(user.id)
                    lista_usuarios[1].push(user.username)
                } else if (reaction.emoji.name === '❔') {
                    // lista_id[2].push(user.id)
                    lista_usuarios[2].push(user.username)
                } else {
                    return
                }
                msg_embed.edit(mensaje('Asistencia', `Marcar asistencia para la guerra ${proxima_guerra()}`).addFields(
                    {name: 'Asisten', value: `${ordenar_nombres(lista_usuarios[0])}`, inline: true},
                    {name: 'No asisten', value: `${ordenar_nombres(lista_usuarios[1])}`, inline: true},
                    {name: 'Tal vez asistan', value: `${ordenar_nombres(lista_usuarios[2])}`, inline: true}
                ))
            }
        })
        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch()
            if (reaction.partial) await reaction.fetch()
            if (user.bot) return
            if (!reaction.message.guild) return
            if (reaction.message.channel.id == channel_id && msg_embed.id == reaction.message.id) {
                if (reaction.emoji.name === '✅') {
                    remover_elemento_lista(lista_usuarios[0], user.username)
                    // remover_elemento_lista(lista_id[0], user.id)
                } else if (reaction.emoji.name === '❎') {
                    remover_elemento_lista(lista_usuarios[1], user.username)
                    // remover_elemento_lista(lista_id[1], user.id)
                } else if (reaction.emoji.name === '❔') {
                    remover_elemento_lista(lista_usuarios[2], user.username)
                    // remover_elemento_lista(lista_id[2], user.id)
                } else {
                    return
                }
                msg_embed.edit(mensaje('Asistencia', `Marcar asistencia para la guerra ${proxima_guerra()}`).addFields(
                    {name: 'Asisten', value: `${ordenar_nombres(lista_usuarios[0])}`, inline: true},
                    {name: 'No asisten', value: `${ordenar_nombres(lista_usuarios[1])}`, inline: true},
                    {name: 'Tal vez asistan', value: `${ordenar_nombres(lista_usuarios[2])}`, inline: true}
                ))
            }
        })
    }
}