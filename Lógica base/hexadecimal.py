#Hexadecimal para binário
def binario(n):
    resultado = ''
    n = str(n).lower()
    numeros = ['0000', '0001' ,'0010', '0011', '0100', '0101', '0110', '0111', '1000', '1001', '1010', '1011', '1100', '1101', '1110', '1111']
    letras = ['a','b','c','d','e','f']
    for c in n:
        index = 0
        confirma = False
        while index < 16:
            if index > 9:
                contador = 0
                while contador < 6:
                    if c == letras[contador]:
                        resultado += numeros[index]
                        confirma = True
                        break
                    contador += 1
                    index += 1
            elif str(index) == c:
                resultado += numeros[index]
                break
            if confirma:
                break
            index +=1
    return resultado

#Hexadecimal para octal
def octal(n):
    resultado = ''
    n = str(n).lower()
    numeros = ['0000', '0001' ,'0010', '0011', '0100', '0101', '0110', '0111', '1000', '1001', '1010', '1011', '1100', '1101', '1110', '1111']
    letras = ['a','b','c','d','e','f']
    for c in n:
        index = 0
        confirma = False
        while index < 16:
            if index > 9:
                contador = 0
                while contador < 6:
                    if c == letras[contador]:
                        resultado += numeros[index]
                        confirma = True
                        break
                    contador += 1
                    index += 1
            elif str(index) == c:
                resultado += numeros[index]
                break
            if confirma:
                break
            index +=1
    n = str(int(resultado))
    resultado = ''
    numeros = '000 001 010 011 100 101 110 111'.split()
    match(len(n)%3):
        case 1:
            n = '00' + n
        case 2:
            n = '0' + n
    for c in range(0, len(n), 3):
        contador = 0
        index = n[c:c+3]
        for k in numeros:
            if index == k:
                resultado += str(contador)
                break
            contador += 1
    return int(resultado)

#Hexadecimal para decimal
def decimal(n):
    letras = ['a','b','c','d','e','f']
    n = str(n)
    resultado = 0
    elevado = len(n) - 1
    for c in n:
        index = 0
        confirma = False
        while index < 16:
            if index > 9:
                contador = 0
                while contador < 6:
                    if c == letras[contador]:
                        resultado += (index) * (16**elevado)
                        elevado -= 1
                        confirma = True
                        break
                    contador += 1
                    index += 1
            elif c == str(index):
                resultado += (index) * (16**elevado)
                elevado -= 1
                break
            if confirma:
                break
            index += 1
    return resultado
