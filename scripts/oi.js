export function decimal_binario(n){
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

