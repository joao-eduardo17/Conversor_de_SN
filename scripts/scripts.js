import * as decimau from "./oi";
//Decimal para binário

decimau.decimal_binario(1010)   


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










