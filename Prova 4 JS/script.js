function calcularFatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let fatorial = 1;
    for (let i = 2; i <= n; i++) {
        fatorial *= i;
    }
    return fatorial;
}

function calcularFibonacci(n) {
    let fibonacci = [0, 1];
    let proximoNumero = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];

    while (proximoNumero <= n) {
        fibonacci.push(proximoNumero);
        proximoNumero = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    }

    return fibonacci;
}

function calcular() {
    const numero = parseInt(document.querySelector("#numero").value);

    if (isNaN(numero) || numero < 0) {
        alert("Por favor, insira um número inteiro positivo.");
        return;
    }

    const fatorial = calcularFatorial(numero);
    const fibonacci = calcularFibonacci(numero);

    document.querySelector("#fatorial").innerText = `Fatorial de ${numero}: ${fatorial}`;
    document.querySelector("#fibonacci").innerText = `Sequência de Fibonacci até ${numero}: ${fibonacci.join(", ")}`;
}