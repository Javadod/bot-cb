function mostrar_por_color(unidades_color, index_color) {
    if (unidades_color[index_color].length === 0)
        return 'No existe unidades de este tipo.'
    let info = ''
    for (const unidad of unidades_color[index_color]) {
        info = info + `*${unidad[0]}\n`
    }
    return info
}

module.exports = {
    mostrar_por_color
}