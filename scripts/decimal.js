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
    valor = valor.reverse();
    valor.ForEach((e) => resultado+=e);
    resultado = '1' + resultado;
    return resultado
}

//Decimal para octal
function octal(n){
    return
}


//Decimal para Hexadecimal
function hexa(n){
    return
}