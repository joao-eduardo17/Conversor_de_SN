const selecoes = document.querySelector("#selects");
const selecao = document.querySelectorAll("#traduzir");
const numero = document.querySelector("#numero");
const converte = document.querySelector("#converter");
const binarioHTML = document.querySelector("#binario");
const octalHTML = document.querySelector("#octal");
const decimalHTML = document.querySelector("#decimal");
const hexadecimalHTML = document.querySelector("#hexadecimal");


converte.addEventListener("click",() => {
    if(selecao[0].selected === true){
        binarioSelect()
    }else if(selecao[1].selected === true){
        octalSelect()
    }else if(selecao[2].selected === true){
        decimalSelect()
    }else if(selecao[3].selected === true){
        hexaSelect()
    }
})

function binarioSelect(){
    binarioHTML.innerHTML = numero.value
    octalHTML.innerHTML = binarioToOctal(numero.value)
    decimalHTML.innerHTML = binarioToDecimal(numero.value)
    hexadecimalHTML.innerHTML = binarioToHexa(numero.value)
}

function octalSelect(){
    binarioHTML.innerHTML = octalToBinario(numero.value)
    octalHTML.innerHTML = numero.value
    decimalHTML.innerHTML = octalToDecimal(numero.value)
    hexadecimalHTML.innerHTML = octalToHexa(numero.value)
}

function decimalSelect(){
    binarioHTML.innerHTML = decimalToBinario(numero.value)
    octalHTML.innerHTML = decimalToOctal(numero.value)
    decimalHTML.innerHTML = numero.value
    hexadecimalHTML.innerHTML = decimalToHexa(numero.value)
}

function hexaSelect(){
    binarioHTML.innerHTML = hexaToBinario(numero.value)
    octalHTML.innerHTML = hexaToOctal(numero.value)
    decimalHTML.innerHTML = hexaToDecimal(numero.value)
    hexadecimalHTML.innerHTML = numero.value
}

//////////////////////////////////////////////////////////////////////////////////

//Binário para octal
function binarioToOctal(n){
    n = String(n);
    if(n.length % 3 == 1){
        n = '00' + n;
    }if(n.length % 3 == 2){
        n = '0' + n;
    }
    let resultado = '';
    const numeros = ['000','001','010','011','100','101','110','111'];
    for(let c = 0; c < n.length; c+=3){
        let contador = 0;
        let index = String(n).slice(c,c+3);
        numeros.forEach((e) => {
            if(index == e){
                resultado += String(contador);
            }
            contador++;
        })
    }
    return parseInt(resultado)
}

//Binário para decimal
function binarioToDecimal(n){
    let lista = String(n);
    let tamanho = String(n).length - 1;
    let resultado = 0;
    lista = lista.split('');
    lista.forEach((e) => {
        if(e == '1'){
            resultado += 2**tamanho;
        } 
        tamanho--
    });
    return resultado
}

//Binário para Hexadecimal
function binarioToHexa(n){
    n = String(n);
    let resultado = '';
    const letras = ['a','b','c','d','e','f'];
    const numeros = ['0000', '0001' ,'0010', '0011', '0100', '0101', '0110', '0111', '1000', '1001', '1010', '1011', '1100', '1101', '1110', '1111'];
    switch(n.length % 4){
        case 1:
            n = '000' + n;
            break;
        case 2:
            n = '00' + n;
            break;
        case 3:
            n = '0' + n;
            break;
    }
    for(let c = 0; c < n.length; c += 4){
        let contador = 0;
        let index = n.slice(c,c+4);
        numeros.forEach((e) => {
            if(index == e && contador > 9){
                let contador2 = 10;
                letras.forEach((k) => {
                    if(contador == contador2){
                        resultado += k;
                    }
                    contador2++;
                })
            }else if(index == e){
                resultado += String(contador);
            }
            contador++;
        }) 
    }
    return resultado
}

//////////////////////////////////////////////////////////////////////////////////

//Octal para binário
function octalToBinario(n){
    n = String(n).split('');
    let resultado = '';
    const numeros = ['000','001','010','011','100','101','110','111'];
    n.forEach((e) => {
        for(let contador = 0; contador < numeros.length; contador++){
            if(e == String(contador)){
                resultado += numeros[contador];
                console.log(resultado)
            }
        }
    })
    return parseInt(resultado)
}

//Octal para decimal
function octalToDecimal(n){
    let resultado = 0;
    n = String(n).split('');
    let index = n.length - 1;
    n.forEach((e) => {
        resultado += parseInt(e) * (8**index);
        index--;
    })
    return resultado   
}

//Octal para hexadecimal 
function octalToHexa(n){
    n = String(n).split('');
    let resultado = '';
    const numeros = ['000','001','010','011','100','101','110','111'];
    n.forEach((e) => {
        for(let contador = 0; contador < numeros.length; contador++){
            if(e == String(contador)){
                resultado += numeros[contador]
            }
        }
    })
    n = String(parseInt(resultado));
    resultado = '';
    let contador;
    let contador2;
    const letras = ['a','b','c','d','e','f'];
    const numerosHexa = ['0000', '0001', '0010', '0011', '0100', '0101', '0110', '0111', '1000', '1001', '1010', '1011', '1100', '1101', '1110', '1111'];
    switch(n.length % 4){
        case 1:
            n = '000' + n;
            break;
        case 2:
            n = '00' + n;
            break;
        case 3:
            n = '0' + n;
    }
    for(let c = 0; c < n.length; c += 4){
        contador = 0;
        index = n.slice(c,c+4);
        numerosHexa.forEach((e) => {
            if(index == e && contador > 9){
                contador2 = 10;
                letras.forEach((k) => {
                    if(contador == contador2){
                        resultado += k;
                    }
                    contador2++;
                })
            }else if(index == e){
                resultado += String(contador);
            }
            contador++;
        })
    }
    return resultado
}

//////////////////////////////////////////////////////////////////////////////////

//Decimal para binário
function decimalToBinario(n){
    let resultado = '';
    if(n == 0){
        return n;
    }
    while(n > 1){
        resultado += String(n%2);
        n = Math.floor(n/2);
    }
    resultado = resultado.split("").reverse().join(""); 
    return '1' + resultado
}

//Decimal para octal
function decimalToOctal(n){
    let resultado = '';
    if(n < 8){
        return n;
    }
    while(n >= 8){
        resultado += String(n%8);
        n = Math.floor(n/8);
    }
    resultado = resultado.split("").reverse().join("");
    return String(n) + String(resultado);

}

//Decimal para Hexadecimal
function decimalToHexa(n){
    const letras = ['a','b','c','d','e','f'];
    let resultado = '';
    let index = 10;
    let divisão;
    if(n<=9){
        return n
    }
    if(n > 9 && n <= 15){
        for(let c = 0; c < 6; c++){
            if(n == index){
                return letras[c]
            }
            index++;
        }
    }
    while(n >= 16){
        divisão = n % 16;
        if(divisão > 9){
            index = 10;
            for(let k = 0; k < 6; k++){
                if(divisão == index){
                    resultado += letras[k];
                }
                index++;
            }
        }else{
            resultado += String(divisão);
        }
        n = Math.floor(n/16);
    }
    if(n > 9){
        index = 10;
        for(let p = 0; p < 6; p++){
            if(n == index){
                n = letras[p];
            }
            index++;
        }
    }
    resultado = resultado.split("").reverse().join("");
    return String(n) + resultado
}

//////////////////////////////////////////////////////////////////////////////////

//Hexadecimal para binário
function hexaToBinario(n){
    let resultado = '';
    let index;
    let confirma;
    let contador;
    n = String(n).toLowerCase().split('');
    const numeros = ['0000', '0001' ,'0010', '0011', '0100', '0101', '0110', '0111', '1000', '1001', '1010', '1011', '1100', '1101', '1110', '1111'];
    const letras = ['a','b','c','d','e','f'];
    n.forEach((e) => {
        index = 0;
        confirma = false;
        while (index < 16) {
            if(index > 9){
                contador = 0;
                while(contador < 6){
                    if(e == letras[contador]){
                        resultado += numeros[index];
                        confirma = true;
                    }
                    contador++;
                    index++;
                }
            }else if(String(index) == e){
                resultado += numeros[index];
            }
            if (confirma)break
            index++
        }
    })
    return parseInt(resultado)
}

//Hexadecimal para octal
function hexaToOctal(n){
    n = String(n).toLowerCase().split('');
    let resultado = '';
    let index;
    let confirma;
    let contador;
    let numeros = ['0000', '0001' ,'0010', '0011', '0100', '0101', '0110', '0111', '1000', '1001', '1010', '1011', '1100', '1101', '1110', '1111'];
    const letras = ['a','b','c','d','e','f'];
    n.forEach((e) => {
        index = 0;
        confirma = false;
        while(index < 16){
            if(index > 9){
                contador = 0;
                while(contador < 6){
                    if(e == letras[contador]){
                        resultado += numeros[index];
                        confirma = true;
                        break;
                    }
                    index++;
                    contador++;
                }
            }else if(String(index) == e){
                resultado += numeros[index];
                break;
            }
            if (confirma)break;
            index++;
        }
    })
    n = resultado;
    resultado = '';
    numeros = ['000','001','010','011','100','101','110','111'];
    switch(n.length % 3){
        case 1:
            n = '00' + n;
            break;
        case 2:
            n = '0' + n;
            break;
    }
    for(let c = 0; c < n.length; c+=3){
        contador = 0;
        index = n.slice(c,c+3);
        numeros.forEach((k) => {
            if(index == k){
                resultado += String(contador);
            }
            contador++;
        })
    }
    return parseInt(resultado)
}

//Hexadecimal para decimal
function hexaToDecimal(n){
    n = String(n).toLowerCase().split('');
    const letras = ['a','b','c','d','e','f'];
    let resultado = 0
    let elevado = n.length - 1
    let contador;
    let index;
    let confirma;
    n.forEach((e) => {
        index = 0;
        confirma = false;
        while(index < 16){
            if(index > 9){
                contador = 0;
                while (contador < 6){
                    if(e == letras[contador]){
                        resultado += (index) * (16**elevado);
                        elevado--;
                        confirma = true;
                        break;
                    }
                    contador++;
                    index++;
                }
            }else if(e == String(index)){
                resultado += (index) * (16**elevado);
                elevado--;
                break;
            }
            if(confirma){
                break;
            }
            index++;
        }
    })
    return resultado
}

//////////////////////////////////////////////////////////////////////////////////
