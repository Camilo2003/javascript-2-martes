const analizarNumeros = (a, b, c) => {
    const max = Math.max(a, b, c);
    const min = Math.min(a, b, c);
    const repetidos = (a === b || b === c || a === c) ? "Existen números repetidos" : "No existen números repetidos";

    const resultado = `El número mayor es: ${max}, el número menor es: ${min}, y ${repetidos}`;

    console.log(resultado);

    document.getElementById("resultado").innerHTML = resultado;
};

analizarNumeros(5, 3, 5);
