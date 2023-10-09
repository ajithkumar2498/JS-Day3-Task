//  Return all prime numbers using anonymous function

const arr = [17, 59, 3, 56, 4, 331, 41, 87, 1, 47, 34, 2];
const isPrime = function(n) {
   if ((n===1)&& (n === 2)){
   return false;
   }
   else{
      for(let i = 2; i < n; i++){
         if(n % i === 0){
            return true;
         }
      }
      return false;
   };
};
const filterPrime = function(arr) {
   const filtered = arr.filter(el => !isPrime(el));
   return filtered;
};
console.log(filterPrime(arr));