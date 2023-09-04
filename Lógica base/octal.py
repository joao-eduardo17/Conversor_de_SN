#Decimal para octal
def octal(n):
    r = ''
    if n <= 8:
        return n
    while n > 8:
        r = r + str(n%8)
        n = n//8
    x = str(n) + str(r[::-1])
    return int(x)

################################

#Octal para decimal
def decimal(n):
    r = 0
    index = len(str(n)) - 1
    for c in str(n):
        r = r + (int(c)*(8**index))
        index -= 1
    return r

