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
function binarioToHexa(n){
    n = String(n);
    let resultado = '';
    const letras = ['a','b','c','d','e','f'];
    const numeros = ['0000', '0001' ,'0010', '0011', '0100', '0101', '0110', '0111', '1000', '1001', '1010', '1011', '1100', '1101', '1110', '1111'];
    switch(n.length % 4){
        case 1:
            n = '000' + n;
            break;
        case 2:
            n = '00' + n;
            break;
        case 3:
            n = '0' + n;
            break;
    }
    for(let c = 0; c < n.length; c += 4){
        let contador = 0;
        let index = n.slice(c,c+4);
        numeros.forEach((e) => {
            if(index == e && contador > 9){
                let contador2 = 10;
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