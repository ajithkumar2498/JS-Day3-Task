//  Summ of all Numebrs in an array using IIFE function
(function(arr1){
    let count=0
    for(let i=0;i<arr1.length;i++){
        count=count+arr1[i];
    }
    console.log(count)
})([25,5,6,8])