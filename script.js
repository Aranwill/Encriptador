const textArea = document.getElementById('campoTexto');
const mensaje = document.getElementById('campoMensaje');
const imagenBack = document.getElementById('imagenSalida');
const btnCopia = document.getElementById('botonCopia');
const mensajes = document.getElementById('mensajes');

const matriz = [
  ['e', 'enter'],
  ['i', 'imes'],
  ['a', 'ai'],
  ['o', 'ober'],
  ['u', 'ufat'],
];

function btnEncriptar() {
  const texto = encriptar(textArea.value);
  mensaje.value = texto;
}

function encriptar(fraseAEncriptar) {
  if (/^[a-z\s]+$/.test(fraseAEncriptar)) {
    for (let i = 0; i < matriz.length; i++) {
      if (fraseAEncriptar.includes(matriz[i][0])) {
        fraseAEncriptar = fraseAEncriptar.replaceAll(
          matriz[i][0],
          matriz[i][1]
        );
      } else {
        limpiarCampos();
      }
    }
    textArea.value = '';

    mensaje.style.display = 'block';
    imagenBack.style.display = 'none';
    btnCopia.style.display = 'block';
    mensajes.style.display = 'none';
    return fraseAEncriptar;
  } else {
    limpiarCampos();
    alert('Solo se aceptan letras minúsculas y sin acentos');
    return '';
  }
}

/*-------------------------------------------*/

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat'],
  ];

  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringDesencriptada;
}

function btnDesencriptar() {
  const textEncriptado = desencriptar(textArea.value);
  mensaje.value = textEncriptado;
  textArea.value = '';
}

function limpiarCampos() {
  document.getElementById('campoTexto').value = '';
  document.getElementById('campoMensaje').value = '';
}

function btnCopiar() {
  let copiar = navigator.clipboard.writeText(mensaje.value);
  return copiar;
}
