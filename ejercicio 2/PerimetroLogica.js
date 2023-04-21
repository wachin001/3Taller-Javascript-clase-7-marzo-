function calcular() {
    const base = parseFloat(document.getElementById('base').value);
    const altura = parseFloat(document.getElementById('altura').value);
    
    const perimetro = 2 * (base + altura);
    const area = base * altura;
    
    document.getElementById('resultado-perimetro').textContent = `El perímetro es: ${perimetro}`;
    document.getElementById('resultado-area').textContent = `El área es: ${area}`;
  }