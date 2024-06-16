// Variables para almacenar los datos ingresados por el usuario
let num1, num2;

// Variable para almacenar el tipo de operación seleccionada
let operacion;

// Variable para almacenar el resultado de la operación
let resultado;

// Métodos para operaciones matemáticas básicas
const calculadora = {
    suma: function(a, b) {
        return a + b;
    },
    resta: function(a, b) {
        return a - b;
    },
    multiplicacion: function(a, b) {
        return a * b;
    },
    division: function(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return "Error: división por cero";
        }
    },
    porcentaje: function(a, b) {
        return (a * b) / 100;
    }
};

// Función para capturar números ingresados por el usuario
function capturarNumeros() {
    num1 = parseFloat(prompt("Ingrese el primer número:"));
    num2 = parseFloat(prompt("Ingrese el segundo número:"));
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, ingrese números válidos.");
        capturarNumeros(); // Llamada recursiva si no se ingresan números válidos
    } else {
        seleccionarOperacion();
    }
}

// Función para seleccionar la operación a realizar
function seleccionarOperacion() {
    operacion = prompt("Seleccione la operación a realizar:\n1 - Suma\n2 - Resta\n3 - Multiplicación\n4 - División\n5 - Porcentaje");

    switch (operacion) {
        case "1":
            resultado = calculadora.suma(num1, num2);
            mostrarResultado();
            break;
        case "2":
            resultado = calculadora.resta(num1, num2);
            mostrarResultado();
            break;
        case "3":
            resultado = calculadora.multiplicacion(num1, num2);
            mostrarResultado();
            break;
        case "4":
            resultado = calculadora.division(num1, num2);
            mostrarResultado();
            break;
        case "5":
            resultado = calculadora.porcentaje(num1, num2);
            mostrarResultado();
            break;
        default:
            alert("Operación no válida. Por favor, seleccione una opción válida.");
            seleccionarOperacion(); // Llamada recursiva si la opción no es válida
            break;
    }
}

// Función para mostrar el resultado
function mostrarResultado() {
    alert(`El resultado de la operación seleccionada es: ${resultado}`);
    console.log(`Operación realizada: ${num1} ${obtenerOperacionTexto(operacion)} ${num2} = ${resultado}`);
}

// Función para obtener el texto de la operación seleccionada
function obtenerOperacionTexto(op) {
    switch (op) {
        case "1":
            return "+";
        case "2":
            return "-";
        case "3":
            return "*";
        case "4":
            return "/";
        case "5":
            return "%";
        default:
            return "";
    }
}

// Iniciar el proceso de captura de números
capturarNumeros();
