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
