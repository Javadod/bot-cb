const { MessageEmbed } = require('discord.js')

function mensaje(titulo, descripcion, fields = [], color = '0xcc0000', thumbnail_icon = '') {
    const embed = new MessageEmbed()
        .setColor(color)
        .setThumbnail(thumbnail_icon)
        .setTitle(titulo)
        .setDescription(descripcion)
        .addFields(fields)
    return embed
}

module.exports = {
    mensaje
}