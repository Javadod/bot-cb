const fs = require('fs')    
const { type } = require('os')
const path = require('path')

// calidad;nombre;informacion;liderazgo;liderazgo16;tipo;nombre_imagen
function manejo_datos () {
    file_path = path.join(__dirname, '../files/unidades.csv')
    const csv = fs.readFileSync(file_path, 'utf8')
    const lista = csv.toString().split('\n')
    //Orden: amarillo, morado, azul, verde, blanco
    let infanteria = [[], [], [], [], []],
        caballeria = [[], [], [], [], []],
        distancia = [[], [], [], [], []]
    for (const unidad of lista) {
        let datos_unidad = unidad.replace('\r', '').split(';')
        if (datos_unidad.length > 1 && datos_unidad !== undefined) {
            let color = datos_unidad[0].replace('﻿', '').toLowerCase()
            let tipo = datos_unidad[6].toLowerCase()
            if (tipo === 'infanteria') {
                if (color === 'amarillo')
                    infanteria[0].push([datos_unidad[1], datos_unidad[2], datos_unidad[3], datos_unidad[4], datos_unidad[5], datos_unidad[7]])
                else if (color === 'morado')
                    infanteria[1].push([datos_unidad[1], datos_unidad[2], datos_unidad[3], datos_unidad[4], datos_unidad[5], datos_unidad[7]])
                else if (color === 'azul')
                    infanteria[2].push([datos_unidad[1], datos_unidad[2], datos_unidad[3], datos_unidad[4], datos_unidad[5], datos_unidad[7]])
                else if (color === 'verde')
                    infanteria[3].push([datos_unidad[1], datos_unidad[2], datos_unidad[3], datos_unidad[4], datos_unidad[5], datos_unidad[7]])
                else if (color === 'blanco')
                    infanteria[4].push([datos_unidad[1], datos_unidad[2], datos_unidad[3], datos_unidad[4], datos_unidad[5], datos_unidad[7]])
            } else if (tipo === 'caballeria') {
                if (color === 'amarillo')
                    caballeria[0].push([datos_unidad[1], datos_unidad[2], datos_unidad[3], datos_unidad[4], datos_unidad[5], datos_unidad[7]])
                else if (color === 'morado')
                    caballeria[1].push([datos_unidad[1], datos_unidad[2], datos_unidad[3], datos_unidad[4], datos_unidad[5], datos_unidad[7]])
                else if (color === 'azul')
                    caballeria[2].push([datos_unidad[1], datos_unidad[2], datos_unidad[3], datos_unidad[4], datos_unidad[5], datos_unidad[7]])
                else if (color === 'verde')
                    caballeria[3].push([datos_unidad[1], datos_unidad[2], datos_unidad[3], datos_unidad[4], datos_unidad[5], datos_unidad[7]])
                else if (color === 'blanco')
                    caballeria[4].push([datos_unidad[1], datos_unidad[2], datos_unidad[3], datos_unidad[4], datos_unidad[5], datos_unidad[7]])
            } else if (tipo === 'distancia') {
                if (color === 'amarillo')
                    distancia[0].push([datos_unidad[1], datos_unidad[2], datos_unidad[3], datos_unidad[4], datos_unidad[5], datos_unidad[7]])
                else if (color === 'morado')
                    distancia[1].push([datos_unidad[1], datos_unidad[2], datos_unidad[3], datos_unidad[4], datos_unidad[5], datos_unidad[7]])
                else if (color === 'azul')
                    distancia[2].push([datos_unidad[1], datos_unidad[2], datos_unidad[3], datos_unidad[4], datos_unidad[5], datos_unidad[7]])
                else if (color === 'verde')
                    distancia[3].push([datos_unidad[1], datos_unidad[2], datos_unidad[3], datos_unidad[4], datos_unidad[5], datos_unidad[7]])
                else if (color === 'blanco')
                    distancia[4].push([datos_unidad[1], datos_unidad[2], datos_unidad[3], datos_unidad[4], datos_unidad[5], datos_unidad[7]])
            }
        }
    }
    return [infanteria, caballeria, distancia]
}

const unidades = manejo_datos()
const infanteria = unidades[0]
const caballeria = unidades[1]
const distancia = unidades[2]

function elegir_tipo (tipo) {
    if (tipo === 'infanteria')
        return infanteria
    else if (tipo === 'caballeria')
        return caballeria
    else if (tipo === 'distancia')
        return distancia
}
// Nombre de la unidad, tipo (infanteria, caballeria o distancia)
function buscar_unidad (nombre) {
    let lista = unidades
    for(const tipo of lista) {
        for (const unidad of tipo[0]
            .concat(tipo[1])
            .concat(tipo[2])
            .concat(tipo[3])
            .concat(tipo[4])) {
            if (unidad.find(nombre_unidad => {
                return ((typeof parseInt(nombre_unidad) !== 'number' || isNaN(parseInt(nombre_unidad))) && nombre_unidad === nombre)
            })) {
                // Nuevo formato: Descripción, liderazgo, L.16%, temporada, nombre_imagen (será el del primer nombre), [nombres]
                let nueva_lista = []
                for (let i = 1; i <= 5; i++)
                    nueva_lista.push(unidad[i])
                let lista_aux = []
                lista_aux.push(unidad[0])
                for (let i = 6; i < unidad.length; i++)
                    lista_aux.push(unidad[i])
                nueva_lista.push(lista_aux)
                return nueva_lista
            }
        }
    }
    return []
}

module.exports = {
    infanteria,
    caballeria,
    distancia,
    buscar_unidad
}