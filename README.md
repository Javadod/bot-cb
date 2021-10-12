# Bibliotecario CB
Bot para la aplicación de Discord que permitirá solicitar información de las unidades a través de comandos.

## Pre-requisitos
### Imagenes
Para que funcione de manera correcta se necesitará imágenes de las veteranías y opcionalmente de la unidad, donde la veteranía mostrará la información correspondiente de la unidad y estarán en una carpeta (ambas) con el nombre de la unidad respectivamente, y tendrá el siguiente formato:
```
Carpeta <nombre de unidad>
    Imagen de veterania: 1.png
    Imagen de unidad: 2.png
```
### Información de las unidades
opcionalmente e necesitará los datos de las unidades, es decir, la información que xplica por dónde subir las veteranías y la utilidad que tiene en cierto ámbito del juego (guerra, mundo abierto, asedios, torneo, etc.), debe estar en un archivo formato csv y debe de tener las siguientes columnas:
```
Marca temporal(tiempo)  |   Tu nombre   |   Nombre de la unidad     |   Es recomendable?    |   Descripción de la unidad
```
Como consejo puede ser llenado en un cuestionario google, en caso de cualquier problema con respecto a información no deseada, se filtrará.
```
* [Ej. Cuestionario](https://forms.gle/a92HXrNd2AU1p9sq7) - Cuestionario google
```
### Token Discord bot
Para que lo puedas usar en tu servidor, necesitarás crear un bot en Discord en el acceso de [desarrolladores](https://discord.com/developers/applications) y presionar el botón de crear aplicación, introduces el nombre de la aplicación y verás nuevos navegadores que podrás personalizar a tu gusto, pero el que nos importa está en la barra de navegación llamado _Bot_, que aparecerá el ícono, _username_ y token, este último necesitamos y copiamos para luego hacer lo siguiente:
* Creamos un archivo llamado .env en la carpeta principal y le ponemos lo siguiente
```
TOKEN_DISCORD=<TOKEN>
```
IMPORTANTE: NUNCA REVELES ESE CÓDIGO.
## Instalación
### Alojamiento
En esta sección no se necesitará de tantos procesos, dependiendo del sistema de alojamiento que eligas; por lo que explicaré 3 ejemplos en donde puedes alojarlo:

1. Heroku
2. Replit
3. Computadora personal
Viene siendo obvio que podemos alojarlo, pero es una opción; siempre y cuando la iniciemos cuando sea necesario o dependiendo del usuario. Lo que necesitarás es lo siguiente
* En la carpeta maestra debes introducir el siguiente comando
```
npm i
```
* Luego de que se haya instalado todo, solo queda iniciar
```
npm start
```
Una forma sencilla de iniciar el bot y probar cambios frecuentes.
* Nota: Debes tener instalado [Node js](https://nodejs.org/es/download/)
* Nota2: En los 2 primeros no es complicado, solo debes subir por completo el código para el uso.