//  Return all prime numbers using IIFE function



(function(arr) {
   const filtered = arr.filter(el => !(function (n){})(el));
   console.log(filtered) ;
})([17, 59, 3, 56, 4, 331, 41, 87, 8, 47, 34]);

( function(n) {
   if (n === 1){
   return false;
   }else if(n === 2){
      return true;
   }else{
      for(let i = 2; i < n; i++){
         if(n % i === 0){
            return false;
         }
      }
      return true;
   };
});
