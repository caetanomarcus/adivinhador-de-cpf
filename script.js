let btn = document.querySelector('button');
let text = document.querySelector('p');



function sendValue() {
    input = document.querySelector('input');
    cpf = input.value;
    if (cpf.length == 9) {
        calcularPrimeiroDigito();
    } else {
        alert('Você precisa digitar 9 dígitos');
    }
    return cpf;
};


function calcularPrimeiroDigito() {
    input = document.querySelector('input');
    cpf = input.value;
    splitCpf = cpf.split("");
    for (var i = 0; i < splitCpf.length; i++) splitCpf[i] = parseInt(splitCpf[i], 10);
    soma1 = 0;
    soma2 = '';
    for (i = 0; i < 9; i++) {
        parseInt(soma1);
        soma1 += ((splitCpf[i] * (10 - i)));
    };
    soma2 = parseInt(soma1) % 11;
    digito1 = 0;
    if (soma2 < 2) {
        digito1 = 0;
    } else {
        digito1 = 11 - soma2;
    };
    cpf += digito1;
    calcularSegundoDigito();
    return digito1;
};

function calcularSegundoDigito() {
    var splitCpf = cpf.split("");
    console.log(splitCpf);
    for (var i = 0; i < splitCpf.length; i++) splitCpf[i] = parseInt(splitCpf[i], 10);
    soma3 = 0;
    soma4 = '';
    for (i = 0; i < 10; i++) {
        parseInt(soma3);
        soma3 += ((splitCpf[i] * (11 - i)));
    };
    soma4 = parseInt(soma3) % 11;
    digito2 = 0;
    if (soma4 < 2) {
        digito2 = 0;
    } else {
        digito2 = 11 - soma4;
    };
    resultado = String(digito1) + String(digito2);
    text.innerHTML = `O número completo do seu CPF é ${splitCpf[0]}${splitCpf[1]}${splitCpf[2]}.${splitCpf[3]}${splitCpf[4]}${splitCpf[5]}.${splitCpf[6]}${splitCpf[7]}${splitCpf[8]}-${resultado}`;
    text.style.display = 'block';

    return resultado;
}


btn.addEventListener('click', function(event) {
    event.preventDefault;
    sendValue();

});