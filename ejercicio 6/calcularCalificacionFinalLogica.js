function calcularCalificacionFinal() {
    // Obtener los valores de los elementos de entrada
    var parcial1 = parseFloat(document.getElementById("parcial1").value);
    var parcial2 = parseFloat(document.getElementById("parcial2").value);
    var parcial3 = parseFloat(document.getElementById("parcial3").value);
    var examenFinal = parseFloat(document.getElementById("examenFinal").value);
    var trabajoFinal = parseFloat(document.getElementById("trabajoFinal").value);

    // Calcular la calificación final
    var promedioParciales = (parcial1 + parcial2 + parcial3) * 0.55 / 3;
    var calificacionExamenFinal = examenFinal * 0.3;
    var calificacionTrabajoFinal = trabajoFinal * 0.15;
    var calificacionFinal = promedioParciales + calificacionExamenFinal + calificacionTrabajoFinal;

    // Mostrar el resultado en la página
    document.getElementById("resultado").innerHTML = "La calificación final es: " + calificacionFinal;
}