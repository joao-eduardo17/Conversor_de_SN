#Decimal para binário
def binário(n):
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
    if n <= 8:
        return n
    while n > 8:
        resultado += str(n%8)
        n = n//8
    x = str(n) + str(resultado[::-1])
    return int(x)

#Decimal para hexadecimal
# def hexa(n):
#     resultado = ''
#     if n <= 16:
#         return n
#     while n > 16:
#         x = n % 16
#         if x > 9:
#             match (x):
#                 case 11:
#                      return