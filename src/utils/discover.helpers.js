export function isPageValid(valor) {

  if (valor === undefined || valor === null || valor == "") return false
  // Verifica si el valor es un número
  // Verifica si el valor es un número entero
  //
  const temp = parseInt(valor)
  if (!typeof (parseInt(temp)) === 'Number') return false
  if (!Number.isInteger(temp)) {
    return false;
  }

  if (typeof temp !== 'number') {
    return false;
  }

  // Verifica si el valor es mayor a 0
  if (temp <= 0) {
    return false;
  }

  // Si pasa todas las validaciones, devuelve true
  return true;
}
