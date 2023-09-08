//Decimal para binário
function binarioToDecimal(n){
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
function octalToDecimal(n){
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
function hexaToDecimal(n){
    const letras = 'a b c d e f'.split('');
    let resultado = '';
    let index = 10;
    let divisão;
    if(n<=9){
        return n
    }
    if(n > 9 && n <= 15){
        for(let c = 0; c < 12 ; c+=2){
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
            for(let k = 0; k < 12; k+=2){
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
        for(let p = 0; p < 12; p+=2){
            if(n == index){
                n = letras[p];
            }
            index++;
        }
    }
    resultado = resultado.split("").reverse().join("");
    return String(n) + resultado
}
