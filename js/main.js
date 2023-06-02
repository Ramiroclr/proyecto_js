// Función para calcular el monto final con plazo fijo tradicional
function calcularMontoFinalTradicional(montoInicial, tasaInteres, plazoDias) {
    let montoFinal = montoInicial;
    let tasaDiaria = tasaInteres / 100 / 365;
    for (let i = 0; i < plazoDias; i++) {
        let interesDiario = montoFinal * tasaDiaria;
        montoFinal += interesDiario;
    }

    return montoFinal.toFixed(2);
}

// Función para calcular el monto final con plazo fijo en UVA
function calcularMontoFinalUVA(montoInicial, tasaInteres, plazoDias) {
    let montoFinal = montoInicial;
    let tasaDiaria = tasaInteres / 100 / 365;
    for (let i = 0; i < plazoDias; i++) {
        let interesDiario = montoFinal * tasaDiaria;
        montoFinal += interesDiario;
    }

    return montoFinal.toFixed(2);
}

// Función para calcular el monto final con plazo fijo cancelable
function calcularMontoFinalCancelable(montoInicial, tasaInteres, plazoDias) {
    let montoFinal = montoInicial;
    let tasaDiaria = tasaInteres / 100 / 365;
    for (let i = 0; i < plazoDias; i++) {
        let interesDiario = montoFinal * tasaDiaria;
        montoFinal += interesDiario;
    }

    return montoFinal.toFixed(2);
}

let salirMenu = false;

do {
    let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada:
    1 - Plazo fijo tradicional
    2 - Plazo fijo en UVA
    3 - Plazo fijo cancelable
    0 - Salir del menú`));

    switch (opcionIngresada) {
        case 1:
            let montoInicialTradicional = parseInt(prompt("Ingrese el monto inicial para el plazo fijo tradicional:"));
            let tasaInteresTradicional = parseInt(prompt("Ingrese la tasa de interés anual (%):"));
            let plazoDiasTradicional = parseInt(prompt("Ingrese el plazo en días:"));

            if (isNaN(montoInicialTradicional) || isNaN(tasaInteresTradicional) || isNaN(plazoDiasTradicional) || montoInicialTradicional <= 0 || tasaInteresTradicional <= 0 || plazoDiasTradicional <= 0) {
                alert("Los datos ingresados no son válidos para el plazo fijo tradicional.");
            } else {
                let resultadoTradicional = calcularMontoFinalTradicional(montoInicialTradicional, tasaInteresTradicional, plazoDiasTradicional);
                alert("El monto final para el plazo fijo tradicional es: $" + resultadoTradicional);
            }
            break;

        case 2:
            let montoInicialUVA = parseInt(prompt("Ingrese el monto inicial para el plazo fijo en UVA:"));
            let tasaInteresUVA = parseInt(prompt("Ingrese la tasa de interés anual (%):"));
            let plazoDiasUVA = parseInt(prompt("Ingrese el plazo en días:"));

            if (isNaN(montoInicialUVA) || isNaN(tasaInteresUVA) || isNaN(plazoDiasUVA) || montoInicialUVA <= 0 || tasaInteresUVA <= 0 || plazoDiasUVA <= 0) {
                alert("Los datos ingresados no son válidos para el plazo fijo en UVA.");
            } else {
                let resultadoUVA = calcularMontoFinalUVA(montoInicialUVA, tasaInteresUVA, plazoDiasUVA);
                alert("El monto final para el plazo fijo en UVA es: $" + resultadoUVA);
            }
            break;

        case 3:
            let montoInicialCancelable = parseInt(prompt("Ingrese el monto inicial para el plazo fijo cancelable:"));
            let tasaInteresCancelable = parseInt(prompt("Ingrese la tasa de interés anual (%):"));
            let plazoDiasCancelable = parseInt(prompt("Ingrese el plazo en días:"));

            if (isNaN(montoInicialCancelable) || isNaN(tasaInteresCancelable) || isNaN(plazoDiasCancelable) || montoInicialCancelable <= 0 || tasaInteresCancelable <= 0 || plazoDiasCancelable <= 0) {
                alert("Los datos ingresados no son válidos para el plazo fijo cancelable.");
            } else {
                let resultadoCancelable = calcularMontoFinalCancelable(montoInicialCancelable, tasaInteresCancelable, plazoDiasCancelable);
                alert("El monto final para el plazo fijo cancelable es: $" + resultadoCancelable);
            }
            break;

        case 0:
            alert("Gracias por utilizar nuestro simulador de plazo fijo. ¡Hasta luego!");
            salirMenu = true;
            break;

        default:
            alert("Opción no válida, ingrese alguna presente en el menú");
            break;
    }
} while (!salirMenu);
