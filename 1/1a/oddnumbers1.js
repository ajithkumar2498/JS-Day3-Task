// odd number using anonymous function
(function(array)
{
    var odd2=[];
    for(let i=0; i<array.length; i++){
        if(array[i]%2==1){
            odd2.push(array[i])
            
        }
    }
    console.log(odd2);
})
([3,5,9,8,7,5])