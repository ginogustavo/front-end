/*
          13 |_4_
               3

          13-4 = 9   1 cuenta
          9-4  = 5   1 cuenta
          5-4  = 1   1 cuenta 
          1-4  =-3    

          13 % 4 = 3 cuentas

          The condition to continue doing (counts) is that dividend is 
          greater or equal than divisor.

          Using Recusivity
          case base:       dividend < divisor
          case recursive:  
          */

function divideInteger(dividend, divisor) {
  if (dividend < divisor) {
    return 0;
  }

  return 1 + divideInteger(dividend - divisor, divisor);
}

console.log(divideInteger(13,4))