// Ingreso de datos de los datos del usuario
let montoInicial = parseInt(prompt("Ingrese el monto inicial:"));
let tasaInteres = parseInt(prompt("Ingrese la tasa nominal anual (TNA) %:"));
let plazoMeses = parseInt(prompt("Ingrese el plazo en meses:"));

// Función para calcular el monto final del plazo fijo
function calcularMontoFinal(montoInicial, tasaInteres, plazoMeses) {
    let montoFinal = montoInicial;
    // Calculamos la tasa de interés mensual
    let tasaMensual = tasaInteres / 100 / 12;

    for (let i = 0; i < plazoMeses; i++) {
        let interesMensual = montoFinal * tasaMensual;
        montoFinal += interesMensual;
    }

    return montoFinal;
}

// Importe a acreditarse
let resultado = calcularMontoFinal(montoInicial, tasaInteres, plazoMeses);

alert("El monto final a acreditarse al cumplirse " + plazoMeses + " meses es: $" + resultado);

