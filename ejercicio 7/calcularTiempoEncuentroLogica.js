function calcularTiempoEncuentro() {
    // Obtener los valores de los elementos de entrada
    var distancia = parseFloat(document.getElementById("distancia").value);
    var velocidad1 = parseFloat(document.getElementById("velocidad1").value);
    var velocidad2 = parseFloat(document.getElementById("velocidad2").value);

    // Calcular el tiempo de encuentro
    var tiempo = distancia / (velocidad2 - velocidad1) * 60; // Convertir a minutos

    // Mostrar el resultado en la página
    document.getElementById("resultado").innerHTML = "El tiempo de encuentro es: " + tiempo + " minutos.";
}