# Proyecto de Cifrado de Vigenère
2do  proyecto- Algortimos de cifrado con javascript.

Este proyecto implementa un cifrado de Vigenère en una página web. Permite cifrar y descifrar mensajes usando una clave secreta, y copiar el mensaje cifrado al portapapeles.

## Descripción

La página web proporciona una interfaz para ingresar un mensaje y una clave secreta, que luego se cifran usando el algoritmo de Vigenère. Los usuarios pueden copiar el mensaje cifrado al portapapeles para pegarlo en cualquier lugar.

## Archivos

- `index.html`: Página principal del proyecto.
- `cifrar.html`: Página para cifrar  mensajes.
- `descifrar.html`: Página para descifrar  mensajes.
- `Css/style.css`: Hoja de estilos .
- `Js/cifradoVigenere.js`: Archivo JavaScript con las funciones de cifrado , descifrado y copiar.

## Instalación

1. Clona el repositorio en tu máquina local.
   ```bash
   git clone https://github.com/LizSoledadDEV/cifradoVigenere.git
Uso
  -Abre el archivo index.html en tu navegador web.
  -Navega a la página de cifrado (cifrar.html).
  -Ingresa el mensaje y la clave en los campos correspondientes.
  -Haz clic en "Cifrar" para cifrar el mensaje.
  -El mensaje cifrado aparecerá en el campo "Mensaje Secreto".
 - Haz clic en "Copiar" para copiar el mensaje cifrado al portapapeles.
 - Para volver a la pagina principal haz click en el boton "Volver a la pagina principal".
 - Para descifrar haz click en descifrar en la pagina index.html.
 - Navega a la página de descifrado (descifrar.html).
  -Ingresa el mensaje cifrado y la clave en los campos correspondientes.
  -Haz clic en "descifrar" para cifrar el mensaje.
  -El mensaje descifrado aparecerá en el campo "Mensaje ".
 - Haz clic en "Copiar" para copiar el mensaje cifrado al portapapeles.
Funcionalidades
Cifrado de Vigenère
El cifrado de Vigenère se realiza mediante la función vigenereCipher(message, key) en el archivo Js/cifradoVigenere.js. Esta función toma el mensaje y la clave como argumentos, y devuelve el mensaje cifrado.

Descifrado de Vigenère
El descifrado de Vigenère se realiza mediante la función vigenereDecipher(message, key) en el archivo Js/cifradoVigenere.js. Esta función toma el mensaje cifrado y la clave como argumentos, y devuelve el mensaje descifrado.

Copiar al Portapapeles
La funcionalidad de copiar al portapapeles se implementa utilizando la API moderna del portapapeles en la función copiarTexto(). Esta función copia el contenido del campo "Mensaje Secreto" al portapapeles del sistema.

Estilo
La página web utiliza un estilo "hacker" para ir con la tematica proporcionado por el archivo Css/style.css. Este estilo incluye colores verdes y negros, y una fuente de letra similar a las consolas de videojuegos o sistemas antiguos.

Créditos
Desarrollado por el grupo 4 del 2do proyecto del programa de Front/Backend. de Crack The Code 
