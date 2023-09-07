//Decimal para binário
function binario(n){
    let resultado = '';
    let valor = '';
    if(n == 0){
        return n;
    }
    while(n > 1){
        valor += String(n%2);
        n = Math.floor(n/2);
    }
    valor = valor.split('');
    valor.forEach((e) => resultado+=e);
    resultado = '1' + resultado;
    return resultado
}

//Decimal para octal
function octal(n){
    let resultado = '';
    let valor = '';
    if(n < 8){
        return n;
    }
    while(n >= 8){
        valor += String(n%8);
        n = Math.floor(n/8);
    }
    valor = valor.split('');
    valor.forEach((e) => resultado+=e);
    resultado = String(n) + String(resultado);
    return resultado

}


//Decimal para Hexadecimal
function hexa(n){
    const letras = 'a b c d e f'.split('');
    let resultado = '';
    let valor = '';
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
    while(n > 15){
        divisão = n % 16;
        if(divisão > 9){
            index = 10;
            for(let k = 0; k < 12; k+=2){
                if(divisão == index){
                    valor += letras[k];
                }
                index++;
            }
        }else{
            valor += String(divisão);
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
    valor = valor.split('');
    console.log(valor)
    valor.forEach((e) => resultado+=e)
    console.log(resultado)
    return String(n) + resultado
}