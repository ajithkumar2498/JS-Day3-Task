//  Summ of all Numebrs in an array using anonymous function
let sum =(arr)=>{
    
    let count=0
    for(let i=0;i<arr.length;i++){
        count=count+arr[i];
    }
    return count

}
console.log(sum([25,5,6,8]))