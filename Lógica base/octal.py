#Octal para binário
def binario(n):
    n = str(n)
    resultado = ''
    numeros = '000 001 010 011 100 101 110 111'.split()
    for c in n:
        for contador in range(len(numeros)):
            if c == str(contador):
                resultado += numeros[contador]
                break
    return int(resultado)

#Octal para decimal
def decimal(n):
    resultado = 0
    index = len(str(n)) - 1
    for c in str(n):
        resultado += (int(c)*(8**index))
        index -= 1
    return resultado

#Octal para Hexadecimal
def hexa(n):
    n = str(n)
    resultado = ''
    numeros = '000 001 010 011 100 101 110 111'.split()
    for c in n:
        for contador in range(len(numeros)):
            if c == str(contador):
                resultado += numeros[contador]
                break
    n = str(int(resultado))
    resultado = ''
    letras = 'a b c d e f'.split()
    numeros = '0000 0001 0010 0011 0100 0101 0110 0111 1000 1001 1010 1011 1100 1101 1110 1111'.split()
    match(len(n) % 4):
        case 1:
            n = '000' + n
        case 2:
            n = '00' + n
        case 3:
            n = '0' + n
    for c in range(0,len(n), 4):
        contador = 0
        index = n[c:c+4]
        for k in numeros:
            if index == k and contador > 9:
                cont2 = 10
                for p in letras:
                    if contador == cont2:
                        resultado += p
                        break
                    cont2 += 1
            elif index == k:
                resultado += str(contador)
                break
            contador += 1
    return resultado
