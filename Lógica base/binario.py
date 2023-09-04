#Decimal para binário
def binario(n):
    r = ''
    if n == 0:
        return n
    while n > 1:
        r = r + str(n%2)
        n = n//2
    return int('1' + r[::-1])

################################

#Binário para decimal
def decimal(n):
    tamanho = len(str(n))-1
    r = 0
    for c in str(n):
        if c == '1':
            r = r + (2**tamanho)
        tamanho =- 1
    return r