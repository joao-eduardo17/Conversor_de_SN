#Decimal para binário
def binario(n):
    resultado = ''
    if n == 0:
        return n
    while n > 1:
        resultado += str(n%2)
        n = n//2
    return int('1' + resultado[::-1])

#Deciaml para octal
def octal(n):
    resultado = ''
    if n < 8:
        return n
    while n >= 8:
        resultado += str(n%8)
        n = n//8
    x = str(n) + str(resultado[::-1])
    return int(x)

#Decimal para hexadecimal
def hexa(n):
    resultado = ''
    letras = 'a b c d e f'.split()
    index = 10
    if n <= 9:
        return n
    if n > 9 and n <= 15:
        for c in range(6):
            if n == index:

                print(letras[c])
                return
            index += 1
    while n >= 16:
        x = n % 16
        if x > 9:
            index = 10
            for k in range(6):
                if x == index:
                    resultado += letras[k]
                index += 1
        else:
            resultado += str(x)
        n = n//16
    if n > 9:
        index = 10
        for p in range(6):
            if n == index:
                n = letras[p]
            index += 1
    print(str(n) + resultado[::-1])
    return
