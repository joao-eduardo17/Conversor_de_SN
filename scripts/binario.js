//Binário para octal
function binarioToOctal(n){
    n = String(n);
    if(n.length % 3 == 1){
        n = '00' + n;
    }if(n.length % 3 == 2){
        n = '0' + n;
    }
    let resultado = '';
    const numeros = ['000','001','010','011','100','101','110','111'];
    for(let c = 0; c < n.length; c+=3){
        let contador = 0;
        let index = String(n).slice(c,c+3);
        numeros.forEach((e) => {
            if(index == e){
                resultado += String(contador);
            }
            contador++;
        })
    }
    console.log(resultado)
    return parseInt(resultado)
}

//Binário para decimal
function binarioToDecimal(n){
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