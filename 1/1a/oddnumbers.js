// odd number using anonymous function
 var odd= function(arr) {
    var odd1=[];
    var even=[];
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i]%2!=0){
            odd1.push(arr[i]);
            
        }
        else{
            even.push(arr[i])
        }      
       }
    return(odd1);
    
}
console.log(odd([3,5,9,8,7,5]))


