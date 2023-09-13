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
    return resultado
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