function calcularMedia() {
    // Obtener los valores de los elementos de entrada
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);

    // Calcular la media de los números
    var media = (num1 + num2 + num3) / 3;

    // Mostrar el resultado en la página
    document.getElementById("resultado").innerHTML = "La media es: " + media;

}