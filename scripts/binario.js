//Binário para octal
function octal(n){
    return
}

//Binário para decimal
function decimal(n){
    let lista = String(n);
    lista = lista.split('');
    let tamanho = String(n).length - 1;
    let resultado = 0;
    lista.forEach((e) => {
        if(e == '1'){
            resultado += 2**tamanho;
        } 
        tamanho--
    });
    return resultado
}

//Binário para Hexadecimal
function hexa(n){
    return
}