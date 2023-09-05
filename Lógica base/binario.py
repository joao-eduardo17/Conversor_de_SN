#Binário para octal
def octal(n):
    return

#Binário para decimal
def decimal(n):
    tamanho = len(str(n))-1
    resultado = 0
    for c in str(n):
        if c == '1':
            resultado += (2**tamanho)
        tamanho =- 1
    return resultado

#Binário para hexadecimal
def hexa(n):
    return
