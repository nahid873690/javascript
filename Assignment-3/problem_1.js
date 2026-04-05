/*function signature/sample */
function newPrice(currentPrice, discount) {
   if(typeof currentPrice !=='number'){
      return "Invalid";
   }
   if( typeof discount !=='number'){
      return "Invalid";
   }
   if (discount < 0){
      return "Invalid";
   }
   if(discount > 100){
      return "Invalid";
   }

   const discountPrice = (currentPrice * discount) / 100;
   const main = currentPrice - discountPrice;
   return main.toFixed(3);


}
