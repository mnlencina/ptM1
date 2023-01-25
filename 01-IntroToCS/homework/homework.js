'use strict';

function BinarioADecimal(num) {
   let decimal = 0;
   for (let i = num.length; i > 0 ; i--){
      decimal += num[i-1] * Math.pow(2,(num.length-i));
   }
   return decimal;
}

function DecimalABinario(num) {
   let str = '';
   while (num != 1){
      str = num % 2 + str;
      num = Math.floor(num/2)
   }
   return num + str;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
