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
