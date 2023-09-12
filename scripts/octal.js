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

//Octal para hexadecimal //manutenção//
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
    n = String(resultado)
}