//Decimal para binário
function decimal_binario(n){
    let r = '';
    let s = '';
    if(n == 0){
        return n
    }
    while(n > 1){
        r += String(n%2)
        n = Math.floor(n/2)
    }
    r = r.split('');
    r = r.reverse();
    r.forEach((e) => s+=e)
    s = '1' + s
    return s
}


//Binário para decimal
function binario_decimal(n){
    let lista = String(n);
    lista = lista.split('');
    let tamanho = String(n).length - 1;
    let resultado = 0;
    lista.forEach((e) => {
        if(e == '1'){
            resultado += 2**tamanho
        }
        tamanho--
    })
    return resultado
}










