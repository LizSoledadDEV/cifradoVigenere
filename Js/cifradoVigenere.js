//! *****EXPLICACIÓN CIFRADO VIGENERE:*****

//* Tabla de Vigenère:
// El cifrado de Vigenère se basa en el uso de una tabla de Vigenère, que es una tabla de alfabetos desplazados.
// Esta tabla consta de varias filas de alfabetos, cada fila desplazada respecto a la anterior. 
// Cada fila representa un desplazamiento diferente del alfabeto.

//* Clave de cifrado:
// La clave de cifrado es una palabra o frase corta (la clave de Vigenère) que se repite a lo largo del mensaje.
// Cada letra de la clave se usa para seleccionar una fila específica de la tabla de Vigenère.

//* Proceso de cifrado:
// Para cifrar un mensaje, cada letra del mensaje se desplaza según la letra correspondiente de la clave.
// Por ejemplo, si la primera letra del mensaje es "M" y la primera letra de la clave es "K", 
// se busca la intersección de la fila "K" y la columna "M" en la tabla de Vigenère para obtener la letra cifrada.

//* Operación matemática:
// El desplazamiento se realiza mediante una operación modular (generalmente suma o resta), 
//donde el desplazamiento se calcula utilizando la posición de la letra en el alfabeto (por ejemplo, A=0, B=1, ..., Z=25).

//* Descifrado:
// Para descifrar el mensaje cifrado, se utiliza la misma tabla de Vigenère y la misma clave. Sin embargo, 
// se realiza una operación inversa para deshacer el cifrado original y recuperar el mensaje original.


//*      A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
// -----------------------------------------------------------
//  A  | A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
//  B  | B C D E F G H I J K L M N O P Q R S T U V W X Y Z A
//  C  | C D E F G H I J K L M N O P Q R S T U V W X Y Z A B
//  D  | D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
//  E  | E F G H I J K L M N O P Q R S T U V W X Y Z A B C D
//  F  | F G H I J K L M N O P Q R S T U V W X Y Z A B C D E
//  G  | G H I J K L M N O P Q R S T U V W X Y Z A B C D E F
//  H  | H I J K L M N O P Q R S T U V W X Y Z A B C D E F G
//  I  | I J K L M N O P Q R S T U V W X Y Z A B C D E F G H
//  J  | J K L M N O P Q R S T U V W X Y Z A B C D E F G H I
//  K  | K L M N O P Q R S T U V W X Y Z A B C D E F G H I J
//  L  | L M N O P Q R S T U V W X Y Z A B C D E F G H I J K
//  M  | M N O P Q R S T U V W X Y Z A B C D E F G H I J K L
//  N  | N O P Q R S T U V W X Y Z A B C D E F G H I J K L M
//  O  | O P Q R S T U V W X Y Z A B C D E F G H I J K L M N
//  P  | P Q R S T U V W X Y Z A B C D E F G H I J K L M N O
//  Q  | Q R S T U V W X Y Z A B C D E F G H I J K L M N O P
//  R  | R S T U V W X Y Z A B C D E F G H I J K L M N O P Q
//  S  | S T U V W X Y Z A B C D E F G H I J K L M N O P Q R
//  T  | T U V W X Y Z A B C D E F G H I J K L M N O P Q R S
//  U  | U V W X Y Z A B C D E F G H I J K L M N O P Q R S T
//  V  | V W X Y Z A B C D E F G H I J K L M N O P Q R S T U
//  W  | W X Y Z A B C D E F G H I J K L M N O P Q R S T U V
//  X  | X Y Z A B C D E F G H I J K L M N O P Q R S T U V W
//  Y  | Y Z A B C D E F G H I J K L M N O P Q R S T U V W X
//  Z  | Z A B C D E F G H I J K L M N O P Q R S T U V W X Y


//* MENSAJE PRUEBA: AMIGA     PALABRA CLAVE: ABCDE      CIFRADO: ANKJE       DESCIFRADO: ALGDW
// A:                       A:
// M:                       B:
// I:                       C:          
// G:                       D:
// A:                       E:




// Función para cifrar un mensaje usando el cifrado de Vigenère
function vigenereCipher(message, key) {
    // Convertir el mensaje y la clave a mayúsculas para simplificar
    message = message.toUpperCase();
    key = key.toUpperCase();

    let encryptedMessage = '';

    // Recorrer cada carácter del mensaje
    for (let i = 0, j = 0; i < message.length; i++) {
        let currentChar = message.charCodeAt(i);

        // Solo cifrar letras del alfabeto, ignorar espacios y otros caracteres
        if (currentChar >= 65 && currentChar <= 90) {
            // Aplicar el desplazamiento
            let shift = key.charCodeAt(j) - 65; // Obtener el valor de desplazamiento de la clave
            let encryptedChar = String.fromCharCode(((currentChar - 65 + shift) % 26) + 65);
            encryptedMessage += encryptedChar;

            // Mover al siguiente carácter de la clave circularmente
            j = (j + 1) % key.length;
        } else {
            // Mantener el carácter si no es una letra
            encryptedMessage += message.charAt(i);
        }
    }

    return encryptedMessage;
}

// Función para descifrar un mensaje usando el cifrado de Vigenère
function vigenereDecipher(message, key) {
    // Convertir el mensaje y la clave a mayúsculas para simplificar
    message = message.toUpperCase();
    key = key.toUpperCase();

    let decryptedMessage = '';

    // Recorrer cada carácter del mensaje
    for (let i = 0, j = 0; i < message.length; i++) {
        let currentChar = message.charCodeAt(i);

        // Solo descifrar letras del alfabeto, ignorar espacios y otros caracteres
        if (currentChar >= 65 && currentChar <= 90) {
            // Aplicar el desplazamiento inverso
            let shift = key.charCodeAt(j) - 65; // Obtener el valor de desplazamiento de la clave
            let decryptedChar = String.fromCharCode(((currentChar - 65 - shift + 26) % 26) + 65);
            decryptedMessage += decryptedChar;

            // Mover al siguiente carácter de la clave circularmente
            j = (j + 1) % key.length;
        } else {
            // Mantener el carácter si no es una letra
            decryptedMessage += message.charAt(i);
        }
    }

    return decryptedMessage;
}

// Función para cifrar el mensaje del formulario HTML
function encryptMessage() {
    let message = document.getElementById('message').value;
    let key = document.getElementById('key').value;

    if (message.length === 0 || key.length === 0) {
        alert('Por favor, ingrese un mensaje y una clave.');
        return;
    }

    let encryptedText = vigenereCipher(message, key);
    document.getElementById('result').value = encryptedText;
}

// Función para descifrar el mensaje del formulario HTML
function decryptMessage() {
    let message = document.getElementById('message').value;
    let key = document.getElementById('key').value;

    if (message.length === 0 || key.length === 0) {
        alert('Por favor, ingrese un mensaje y una clave.');
        return;
    }

    let decryptedText = vigenereDecipher(message, key);
    document.getElementById('result').value = decryptedText;
}