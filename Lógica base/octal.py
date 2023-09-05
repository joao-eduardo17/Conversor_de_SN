#Octal para binário
def binario(n):
    return

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
    return
