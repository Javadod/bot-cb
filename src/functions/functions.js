/**
 * Función que pone todo la primera letra en mayúscula mientras que las demás en minúscula.
 * @param {String} palabra palabra u oración que se modificará.
 * @returns {String} Retorna la palabra modificada.
 */
function capitalize(palabra) {
    return palabra[0].toUpperCase() + palabra.substring(1).toLowerCase()
}

module.exports = {
    capitalize
}