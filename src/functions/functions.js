function capitalize(palabra) {
    return palabra[0].toUpperCase() + palabra.substring(1).toLowerCase()
}

module.exports = {
    capitalize
}