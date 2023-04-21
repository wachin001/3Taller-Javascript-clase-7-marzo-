function calcular() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    const suma = num1 + num2;
    const resta = num1 - num2;
    const division = num1 / num2;
    const multiplicacion = num1 * num2;
    
    document.getElementById('resultado-suma').textContent = `La suma es: ${suma}`;
    document.getElementById('resultado-resta').textContent = `La resta es: ${resta}`;
    document.getElementById('resultado-division').textContent = `La división es: ${division}`;
    document.getElementById('resultado-multiplicacion').textContent = `La multiplicación es: ${multiplicacion}`;
  }