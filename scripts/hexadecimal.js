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