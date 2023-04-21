function calcularHipotenusa() {
    const cateto1 = parseFloat(document.getElementById('cateto1').value);
    const cateto2 = parseFloat(document.getElementById('cateto2').value);
    
    const hipotenusa = Math.sqrt(cateto1**2 + cateto2**2);
    
    document.getElementById('resultado-hipotenusa').textContent = `La hipotenusa es: ${hipotenusa}`;
  }