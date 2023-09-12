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
    return

#Hexadecimal para decimal
def decimal(n):
    return
