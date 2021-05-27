// VARIÁVEIS GLOBAIS

let btn = document.querySelector('button');
let text = document.querySelector('p');
let input = document.querySelector('input');


function sendValue() {
    cpf = input.value;
    if (cpf.length == 9) {
        calcularDigitos(cpf);
        calcularDigitos(cpf);

    } else {
        alert('Você precisa digitar 9 dígitos.')
    }
    return cpf
}

/** 
 * Calcula os dois últimos dígitos do CPF
 * 
 * @param {String}  input string que será caculada, é o cpf com 9 dígitos
 * @return {String} A string será o cpf com os 11 dígitos
 * 
*/



function calcularDigitos(cpf9) {
    let splitCpf = cpf9.split("");
    let soma = 0;
    let resto = 0;
    for (i = 0; i < cpf9.length; i++) soma += splitCpf[i] * ((splitCpf.length +1) - i);
    resto = soma % 11;
    digito = 0;
    if (resto < 2) {
        digito = 0;
    } else {
        digito = 11 - resto;
    };
    cpf += digito;
    digito2 = 0 ;

    if (cpf.length == 11){
        digito1 = cpf.substring(9, 10);
        digito2 = cpf.substring(10);
        text.innerHTML = `O número completo do seu CPF é ${splitCpf[0]}${splitCpf[1]}${splitCpf[2]}.${splitCpf[3]}${splitCpf[4]}${splitCpf[5]}.${splitCpf[6]}${splitCpf[7]}${splitCpf[8]}-${digito1}${digito2}`;
        text.style.display = 'block';
    };
    return cpf;
};

btn.addEventListener('click', function(event) {
    let cpf ;
    event.preventDefault;
    sendValue();
});
